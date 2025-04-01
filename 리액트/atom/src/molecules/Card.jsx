import Address from "../atom/Address";
import Clock from "../atom/Clock";
import State from "../atom/State";
import Tag from "../atom/Tag";

const Card = () => {
  return (
    <div style={{ padding: "20px", backgroundColor: "#CDDC39" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Clock clock={"오전 10:00"} />
        <State state={"확정"} />
      </div>
      <Address address={"서울 특별시 서초구 양재동"} />
      <Tag tag={"비대면"} />
      <Tag tag={"니로 EV"} />
    </div>
  );
};

export default Card;
