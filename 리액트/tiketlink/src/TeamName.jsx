const TeamName = (props) => {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        {props.homeName} vs {props.awayName}
      </div>
    </div>
  );
};

export default TeamName;
