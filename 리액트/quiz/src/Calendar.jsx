import DateName from "./DateName";
import Day from "./Day";

const Calender = (props) => {
  return (
    <div>
      <Day dayNum={props.dayNum}></Day>
      <DateName date={props.date}></DateName>
    </div>
  );
};

export default Calender;
