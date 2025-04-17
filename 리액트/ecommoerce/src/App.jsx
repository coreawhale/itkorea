// import { useState } from "react";
import { useEffect, useState } from "react";
import Product from "./products/Product";
import Filter from "./filter/Filter";

function App() {
  const [products, setProducts] = useState([]);
  const [original, setOriginal] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((v) => {
        setProducts((prev) => {
          const newPrev = [...v.products];
          return newPrev;
        });
        setOriginal((prev) => {
          const newPrev = [...v.products];
          return newPrev;
        });
      });
  }, []);

  return (
    <>
      <Filter setProducts={setProducts} original={original} />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)" }}>
        {products.map((v) => {
          return <Product {...v} />;
        })}
      </div>
    </>
  );
}

export default App;
