const Tag = (props) => {
  return (
    <span
      style={{
        padding: "10px",
        borderRadius: "20px",
        backgroundColor: "#8bc34a",
        fontSize: "12px",
        fontWeight: "normal",
      }}
    >
      {props.tag}
    </span>
  );
};

export default Tag;
