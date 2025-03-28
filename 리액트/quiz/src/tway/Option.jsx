import Cabin from "./Cabin";
import Checked from "./Checked";
import Seat from "./Seat";
import Title from "./Title";
import Price from "./Price";
import Meal from "./Meal";
import Free from "./Free";

const Option = (props) => {
  return (
    <div
      style={{
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
      }}
    >
      <Seat class={props.class} />
      <Cabin cabinweight={props.cabinweight} />
      <Checked checkedweight={props.checkedweight} />
      <Meal meal={props.meal} />
      <Free free={props.free} />
    </div>
  );
};

export default Option;
