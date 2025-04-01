import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Text from "./Text";
import Input from "./Input";

function App() {
  const [value, setValue] = useState("");

  const validLength = (value) => 4 <= value.length && value.length < 12;
  const validSpecial = (value) => [..."!@#&*"].some((v) => value.includes(v));
  const validHasNum = (value) =>
    [..."1234567890"].some((v) => value.includes(v));

  return (
    <>
      <Input func={setValue} />
      {/* 유효하면 초록색으로 변경 아니면 검은색 유지 */}
      <Text text={"길이 4~12"} func={validLength} value={value} />
      <Text text={"글자에 !,#,@,&,*"} func={validSpecial} value={value} />
      <Text text={"숫자 포함!"} func={validHasNum} value={value} />
    </>
  );
}

export default App;
