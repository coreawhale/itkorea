// 기존 수업
// import type { CSSProperties } from "react";

import { useState } from "react";

// import type { CSSProperties } from "react";

// const Box = (props: { text: string }) => {
//   const boxStyle: CSSProperties = {
//     width: "100px",
//     height: "100px",
//     backgroundColor: "black",
//   };
//   return <div style={boxStyle}>{props.text}</div>;
// };

// export default Box;

// type BoxProps = { text: string };
// type Css = keyof CSSProperties;

// const Box = ({ text }: BoxProps) => {
//   const A: Css = "color";

//   return <div style={{ color: A }}>{text}</div>;
// };

// export default Box;

// --------------------
type Box = { text: "하늘" | "핑크"; backgroundColor: "skyblue" | "pink" };

const Box = () => {
  const [box, setBox] = useState<Box>({
    text: "하늘",
    backgroundColor: "skyblue",
  });

  const handleClick = () => {
    setBox((prev) => {
      const text = prev.text == "하늘" ? "핑크" : "하늘";
      const backgroundColor =
        prev.backgroundColor == "skyblue" ? "pink" : "skyblue";

      return { text, backgroundColor };
    });
  };

  return (
    <div
      style={{
        width: "100px",
        height: "100px",
        backgroundColor: box.backgroundColor,
      }}
      onClick={handleClick}
    >
      {box.text}
    </div>
  );
};

export default Box;
