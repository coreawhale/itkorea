const Spiner = (props) => {
  const buttonStyle = {
    padding: "10px",
    border: "none",
  };
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <button
        style={{
          ...buttonStyle,
          color: props.count == 1 ? "#efefef" : "black",
        }}
        onClick={() => props.setCount((prev) => (prev == 1 ? 1 : prev - 1))}
      >
        -
      </button>
      <span>{props.count}</span>
      <button
        style={buttonStyle}
        onClick={() => props.setCount((prev) => prev + 1)}
      >
        -
      </button>
    </div>
  );
};

export default Spiner;
