const Size = (props) => {
  const objSize = { small: "S", medium: "M", large: "L" };
  return <span>{objSize[props.size].toUpperCase() || "M"}</span>;
};

export default Size;
