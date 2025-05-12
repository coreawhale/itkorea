// 기존 수업
// import type { CSSProperties } from "react";

import type { CSSProperties } from "react";

// const Box = (props: { text: string }) => {
//   const boxStyle: CSSProperties = {
//     width: "100px",
//     height: "100px",
//     backgroundColor: "black",
//   };
//   return <div style={boxStyle}>{props.text}</div>;
// };

// export default Box;

type BoxProps = { text: string };
type Css = keyof CSSProperties;

const Box = ({ text }: BoxProps) => {
  const A: Css = "color";

  return <div style={{ color: A }}>{text}</div>;
};

export default Box;
