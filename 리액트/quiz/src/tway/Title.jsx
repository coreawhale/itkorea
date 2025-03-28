const Title = (props) => {
  return (
    <div
      style={{
        textAlign: "center",
        padding: "20px",
        fontSize: "20px",
        backgroundColor: props.bg,
      }}
    >
      {props.title}
    </div>
  );
};

export default Title;
