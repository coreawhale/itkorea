import { useState } from "react";
import Count from "./Count";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Count size={"s"} count={"1"} price={"27,800"} />
    </>
  );
}

export default App;
