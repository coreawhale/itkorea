import GreenCircle from "./GreenCircle";
import RedCircle from "./RedCircle";
import YellowCircle from "./YellowCircle";

function App() {
  return (
    <div style={{ display: "flex", gap: "10px" }}>
      <GreenCircle></GreenCircle>
      <YellowCircle></YellowCircle>
      <RedCircle></RedCircle>
    </div>
  );
}

export default App;
