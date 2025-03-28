import Date from "./Date";
import Schedule from "./Schedule";
import Stadium from "./Stadium";
import Team from "./Team";
import TeamName from "./TeamName";

const Card = (props) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        borderBottom: "1px solid #ccc",
        padding: "20px 0",
      }}
    >
      <Date {...props} />
      <Team {...props} />
      <TeamName {...props} />
      <Stadium {...props} />
      <Schedule {...props} />
    </div>
  );
};

export default Card;
