const Button = (props) => {
  return (
    <button
      onClick={() => {
        alert("버튼입니다.");
      }}
      style={{
        backgroundColor: props.backgroundColor,
        borderRadius: props.borderRadius,
        padding: "10px 45px",
        color: "white",
      }}
    >
      button
    </button>
  );
};

export default Button;
