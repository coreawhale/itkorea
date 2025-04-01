const State = (props) => {
  return (
    <span style={{ color: "green", fontWeight: "bold", fontSize: "14px" }}>
      {props.state}
    </span>
  );
};

export default State;
