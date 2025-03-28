import { MdNoMeals } from "react-icons/md";

const Meal = (props) => {
  return (
    <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
      <MdNoMeals />
      <span>{props.meal}</span>
    </div>
  );
};

export default Meal;
