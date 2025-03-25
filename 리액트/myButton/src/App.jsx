// import NumberButton from "./NumberButton";

import Card from "./Card";

function App() {
  const card = [
    { title: "Kia Green", colorCode: "#5d7d2b" },
    { title: "Kia Green_dark", colorCode: "#4c5b35" },
    { title: "Kia Green_variant", colorCode: "#589000" },
  ];
  return (
    <div style={{ display: "flex", gap: "10px" }}>
      {card.map((v) => {
        return <Card {...v}></Card>;
      })}
      {/* {Array(101) // 100만들기 필수!!!!
        .fill(0)
        .map((x, i) => {
          return (
            <NumberButton
              text={i}
              handleclick={() => {
                alert(`${i}`);
              }}
            ></NumberButton>
          );
        })} */}
    </div>
  );
}

export default App;
