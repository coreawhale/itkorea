const Text = (props) => {
  return (
    <div style={{ color: props.func(props.value) ? "green" : "black" }}>
      {props.text}
    </div>
  );
};

export default Text;
