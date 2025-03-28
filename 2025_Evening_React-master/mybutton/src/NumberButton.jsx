const NumberButton = (props) => {
  const color = ["red", "orange", "yellow", "green", "blue", "indigo", "purple"];

  return (
    <button
      onClick={() => {
        alert(`누르신 번호는 ${props.num}입니다!`);
      }}
      style={{ padding: "5px 10px", border: "none", backgroundColor: color[props.num % 7] }}
    >
      {props.num}
    </button>
  );
};
export default NumberButton;
