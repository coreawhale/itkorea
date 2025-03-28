const Price = (props) => {
  if (props.seats == "0") return <div>매진</div>;
  return (
    <div
      style={{
        textAlign: "center",
        padding: "20px",
        fontSize: "20px",
      }}
    >
      <span>{props.currency}</span>
      <span>{props.price}</span>
      <span>{props.seats}</span>
    </div>
  );
};

export default Price;
