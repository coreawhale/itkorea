const DateName = (props) => {
  const dayKorName = ["일", "월", "화", "수", "목", "금", "토"];
  const dayColor = { 5: "blue", 6: "red" };

  return (
    <div style={{ color: dayColor[props.dayNum] || "black" }}>
      {dayKorName.props.date}
    </div>
  );
};

export default DateName;
