const Day = (props) => {
  const dayKorName = ["월", "화", "수", "목", "금", "토", "일"];
  const dayColor = { 5: "blue", 6: "red" };
  return (
    <div style={{ color: dayColor[props.dayNum] || "black" }}>
      {dayKorName.props.dayNum}
    </div>
  );
};

export default Day;
