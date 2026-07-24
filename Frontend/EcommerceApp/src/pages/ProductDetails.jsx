import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const API_MAP = {
  trendy:"products",
  women: "womenproducts",
  men: "menproducts",
  kids: "kidsproducts",
  watch: "watchproducts",
};

function ProductDetail() {
  const { category, id } = useParams();
  const [product, setProduct] = useState(null);
  const [size, setSize] = useState('')
  const [error, setError] = useState('')

  const handleClick = (e) => {
    const name = e.currentTarget.name
    setSize(name)
  }

  const productSize = () => {
    if (size != "") {
      setError('')
      alert("Item added to cart")
    }
    else {
      setError('Please select a size')
    }
  }

  const wishlist = ()=>{
    alert("Item added to wishlist")
  }


  useEffect(() => {
    const endpoint = API_MAP[category];
    fetch(`http://127.0.0.1:8000/api/${endpoint}/${id}/`)
      .then(res => res.json())
      .then(data => setProduct(data));
  }, [category, id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div>
      <section className="container">
        <div className="product-detail d-flex flex-wrap justify-content-center gap-5 my-5">
          <img src={`http://127.0.0.1:8000${product.image}`} alt={product.alt} />

          <div>
            <span className="category">{category}</span>
            <h5 className="mt-3 fs-5">{product.name}</h5>
            <p className="paragraph text-secondary mb-3">{product.description}</p>
            <h4>₹ {product.price}</h4>
            <p className="text-success">Inclusive of all taxes</p>
            <h6 className="my-3">Select Size:</h6>
            <div className="d-flex gap-2" >
              <button name="S" onClick={handleClick} className="fw-bold box-size bg-white">S</button>
              <button name="M" onClick={handleClick} className="fw-bold box-size bg-white">M</button>
              <button name="L" onClick={handleClick} className="fw-bold box-size bg-white">L</button>
            </div>

            <p className="text-danger mt-1">{error}</p>
            <div className="buttons d-flex gap-3 mt-4">
              <button onClick={productSize} className="btn btn-outline-success cart">Add to Cart</button>
              <button onClick={wishlist} className="btn btn-warning wishlist">Wishlist</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProductDetail;