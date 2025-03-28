const Schedule = (props) => {
  const boxStyle = {
    backgroundColor: "#f2f2f2",
    borderRadius: "10px",
    textAlign: "center",
    width: "150px",
    height: "70px",
    display: "flex",
    alignItems: "center",
    color: "gary",
    justifyContent: "center",
    // textAlign: "center",
  };
  const boxStyleopen = {
    backgroundColor: "red",
    borderRadius: "10px",
    // textAlign: "center",
    width: "150px",
    height: "70px",
    display: "flex",
    alignItems: "center",
    color: "white",
    justifyContent: "center",
  };

  if (props.opentrue == "true")
    return <div style={boxStyleopen}>오픈 완료</div>;
  return (
    <div style={boxStyle}>
      {props.openday} ({props.opendate})<br />
      {props.opentime} {props.openstate}
    </div>
  );
};

export default Schedule;
