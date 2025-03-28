import { LuCrown } from "react-icons/lu";

const Free = (props) => {
  return (
    <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
      <LuCrown />
      <span>{props.free}</span>
    </div>
  );
};

export default Free;
