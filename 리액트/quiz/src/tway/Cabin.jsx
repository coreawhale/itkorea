import { MdLuggage } from "react-icons/md";

const Cabin = (props) => {
  return (
    <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
      <MdLuggage />
      <span>{props.cabinweight}</span>
    </div>
  );
};

export default Cabin;
