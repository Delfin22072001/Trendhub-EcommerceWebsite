import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'

export default function Login() {
  const navigate = useNavigate()
  const [mobile, setMobile] = useState('')
  const [password, setPassword] = useState('')
  const [rememberMe, setRememberMe] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Validation
    if (!mobile || !password) {
      setError("All fields are required!")
      return
    }
    if (!/^\d{10}$/.test(mobile)) {
      setError("Enter valid 10-digit mobile number!")
      return
    }

    setLoading(true)
    setError('')

    try {
      const res = await fetch("http://127.0.0.1:8000/api/login/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          mobile: parseInt(mobile),
          password: password,
        }),
      })

      const data = await res.json()

      if (res.ok) {
        localStorage.setItem("username", data.username)
        navigate("/")
      } else {
        setError(data.message || "Invalid mobile or password!")
      }
    } catch (err) {
      setError("Server error. Make sure Django is running.")
    }

    setLoading(false)
  }

  return (
    <div>
      <div className="login-form my-5 py-3">
        <form className="form" id="login-form" onSubmit={handleSubmit}>
          <h4 className="mb-4 text-center">Login</h4>

          {/* Error message */}
          {error && (
            <p className="text-danger text-center">{error}</p>
          )}

          <div className="mb-4">
            <input
              type="tel"
              className="form-control"
              id="inputPhoneNumber"
              placeholder="Phone Number"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              id="inputPassword"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <input
            type="checkbox"
            name="rememberMe"
            id="rememberMe"
            className="mb-4"
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.target.checked)}
          /> Remember Me

          <button
            type="submit"
            className="btn btn-primary w-100 mt-3"
            id="login-btn"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Submit"}
          </button>

          <p className="text-center mt-3" style={{ fontSize: 13 }}>
            Don't have an account?{" "}
            <Link to="/register">Register here</Link>
          </p>

        </form>
      </div>
    </div>
  )
}
