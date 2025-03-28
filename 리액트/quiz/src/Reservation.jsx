const Reservation = (props) => {
  return (
    <div>
      <h2 style={{ backgroundColor: props.headerStyle }}>{props.title}</h2>
      <div>
        {props.classIcon}
        {props.class}
      </div>
      <div>{props.onboard}</div>
      <div>{props.free}</div>
      <div>{props.saber1}</div>
      <div>{props.saber2}</div>
      <div>
        KRW <span>{props.price}요금 정보</span>
        <span style={{ color: "red" }}>{props.seat}석</span>
      </div>
    </div>
  );
};

export default Reservation;
