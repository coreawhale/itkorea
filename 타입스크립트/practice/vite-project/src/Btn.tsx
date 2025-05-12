import type { CSSProperties } from "react";

type Round = {
  hard: "0px";
  smooth: "5px";
  circle: "10px";
};

type Backgrounds = {
  primay: "#205bf3";
  secondary: "#478df5";
};

type RoundKeys = keyof Round;
type BackgroundsKeys = keyof Backgrounds;

type ButtonProps = {
  borderRadius: RoundKeys;
  backgroundColor: BackgroundsKeys;
};

const Btn = ({ borderRadius, backgroundColor }: ButtonProps) => {
  const buttonStyle: CSSProperties = {
    padding: "10px",
    borderRadius,
    backgroundColor,
  };
  return <button style={buttonStyle}>버튼</button>;
};

export default Btn;
