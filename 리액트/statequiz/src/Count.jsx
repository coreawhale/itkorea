import { useState } from "react";
import Spiner from "./Spiner";
import Price from "./Price";
import Size from "./Size";

const Count = (props) => {
  const [count, setCount] = useState(1);
  return (
    <div
      style={{
        padding: "20px",
        backgroundColor: "#f1f1f1",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
      }}
    >
      <div>
        <Size size={"small"} />
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Spiner setCount={setCount} count={count} />
        <Price price={27800} count={count} />
      </div>
    </div>
  );
};

export default Count;
