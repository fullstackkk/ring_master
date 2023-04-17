import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function ProductPage() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setProduct(json));
  }, []);
  useEffect(() => {
    console.log(product);
  }, [product]);

  return (
    <div>
      <h1>Product Page</h1>
      <ul>
        {product &&
          product.map((item) => {
            return (
              <li key={item.id}>
                <Link to={`/product/${item.id}`}>
                  <h2>{item.title}</h2>
                </Link>
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default ProductPage;
