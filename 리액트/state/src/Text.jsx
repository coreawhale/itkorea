const Text = (props) => {
  return (
    <div
      //   func={props.func}
      //   val={props.value}
      style={{ color: props.valid ? "green" : "black" }}
    >
      {props.text}
    </div>
  );
};

export default Text;
