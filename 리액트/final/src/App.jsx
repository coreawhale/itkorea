import { useEffect, useState } from "react";
import Product from "./components/Product";

function App() {
  const [original, setOriginal] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((v) => {
        setOriginal((prev) => {
          const newPrev = [...v.products];
          return newPrev;
        });
        setProducts((prev) => {
          const newPrev = [...v.products];
          return newPrev;
        });
      });
  }, []);

  const filterRate = (up) => {
    setProducts((prev) => {
      const newPrev = [...original].filter((v) => v.rating >= up);
      return newPrev;
    });
  };

  return (
    <>
      <button
        onClick={() => {
          filterRate(0);
        }}
      >
        전체 보기
      </button>
      <button
        onClick={() => {
          filterRate(4);
        }}
      >
        4점 이상만 보기
      </button>
      <button
        onClick={() => {
          filterRate(3);
        }}
      >
        3점 이상만 보기
      </button>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "100px",
        }}
      >
        {products.map((v) => {
          return (
            <Product
              title={v.title}
              rate={v.rating}
              thumbnail={v.thumbnail}
            ></Product>
          );
        })}
      </div>
    </>
  );
}

export default App;
