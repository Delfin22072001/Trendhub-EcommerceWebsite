import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'

export default function Register() {
  const navigate = useNavigate()
  const [username, setUsername] = useState('')
  const [mobile, setMobile] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Validation
    if (!username || !mobile || !password) {
      setError("All fields are required!")
      return
    }
    if (!/^\d{10}$/.test(mobile)) {
      setError("Enter valid 10-digit mobile!")
      return
    }

    setLoading(true)
    setError('')

    try {
      const res = await fetch("http://127.0.0.1:8000/api/register/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: username,
          mobile: parseInt(mobile),
          password: password,
        }),
      })

      const data = await res.json()

      if (res.ok) {
        alert("Registered successfully!")
        navigate("/login")
      } else {
        setError(data.message || "Registration failed!")
      }
    } catch (err) {
      setError("Server error. Make sure Django is running.")
    }

    setLoading(false)
  }

  return (
    <div>
      <div className="login-form my-5">
        <form className="form" id="register-form" onSubmit={handleSubmit}>
          <h4 className="text-center mb-4">Register</h4>

          {error && <p className="text-danger text-center">{error}</p>}

          <div className="mb-4">
            <input
              type="text"
              className="form-control"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <input
              type="tel"
              className="form-control"
              placeholder="Phone Number"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary w-100"
            disabled={loading}
          >
            {loading ? "Registering..." : "Register"}
          </button>

          <p className="text-center mt-3" style={{ fontSize: 13 }}>
            Already have an account?{" "}
            <Link to="/login">Login here</Link>
          </p>

        </form>
      </div>
    </div>
  )
}