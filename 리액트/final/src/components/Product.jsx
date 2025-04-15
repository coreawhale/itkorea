const Product = (props) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "200px",
        height: "300px",
      }}
    >
      <img
        src={props.thumbnail}
        alt=""
        style={{ width: "100%", objectFit: "cover", height: "70%" }}
      />
      <span>별점: {props.rate}</span>
      <span>{props.title}</span>
    </div>
  );
};

export default Product;
