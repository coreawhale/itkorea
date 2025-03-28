const Button = (props) => {
  return (
    <div
      onClick={() => {
        alert("이것은 버튼입니당!");
      }}
      style={{
        color: "white",
        padding: "10px 45px",
        textAlign: "center",
        backgroundColor: props.bg,
        borderRadius: props.br,
      }}
    >
      Button
    </div>
  );
};

export default Button;
