const NumberButton = (props) => {
  const colorList = [
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "indigo",
    "purple",
  ];

  return (
    <button
      style={{
        padding: "5px 10px",
        border: "none",
        backgroundColor: colorList % 7,
      }}
      onClick={props.handleclick}
    >
      {props.text}
    </button>
  );
};

export default NumberButton;
