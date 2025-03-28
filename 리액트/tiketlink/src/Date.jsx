const Date = (props) => {
  return (
    <div style={{ display: "flex", alignItems: "center", fontSize: "60px" }}>
      {props.day}
      <div
        style={{
          display: "flex",
          // alignItems: "center",
          // justifyContent: "center",
          flexDirection: "column",
          fontSize: "16px",
        }}
      >
        <span>({props.date})</span>
        <span>{props.time}</span>
      </div>
    </div>
  );
};

export default Date;
