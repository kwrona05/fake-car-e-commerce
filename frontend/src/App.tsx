import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { CartContext } from "./Cart";
import axios from "axios";
const App = () => {
  const [products, setProducts] = useState([]);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/products/")
      .then((response: any) => setProducts(response.data))
      .catch((error: any) => console.error(error));
  }, []);

  return (
    <div className="container">
      <h1>Fake Car Shop</h1>
      <div>
        {products.map((product) => (
          <div key={product.id}>
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>
              <strong>{product.price} USD</strong>
            </p>
            <button onClick={() => addToCart(product)}>Add to cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
