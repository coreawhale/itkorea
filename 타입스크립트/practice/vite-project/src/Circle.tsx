import type { CSSProperties } from "react";

const Circle = (props: { text: string }) => {
  const circleStyle: CSSProperties = {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    backgroundColor: "pink",
  };

  return <div style={circleStyle}>{props.text}</div>;
};

export default Circle;
