const Card = (props) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "300px",
        height: "400px",
        borderRadius: "10px",
        border: "1px solid #ccc",
      }}
    >
      <div
        style={{ backgroundColor: props.colorCode, flex: "1", height: "100px" }}
      ></div>
      <div
        style={{
          flex: "1",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "20px",
        }}
      >
        <span>{props.title}</span>
        <span>{props.colorCode}</span>
      </div>
    </div>
  );
};

export default Card;
