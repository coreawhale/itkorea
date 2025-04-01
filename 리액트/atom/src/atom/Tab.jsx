const Tab = (props) => {
  const buttonStyle = {
    backgroundColor: "white",
    color: "black",
    fontWeight: "bold",
  };
  return (
    <button
      style={
        props.active
          ? { ...buttonStyle, color: "white", backgroundColor: "black" }
          : buttonStyle
      }
    >
      {props.text}
    </button>
  );
};

export default Tab;
