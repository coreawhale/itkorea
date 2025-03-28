const Team = (props) => {
  const imgStyle = {
    width: "50px",
    heigth: "50px",
    overflow: "hidden",
  };

  const imgUrl = "./img/";

  return (
    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
      <img src={props.home} style={imgStyle} />
      <span>vs</span>
      <img src={props.away} style={imgStyle} />
    </div>
  );
};

export default Team;
