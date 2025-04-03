import { useState } from "react";
import CarStatus from "./featured/carstatus/CarStatus";
import NextButton from "./featured/linkbutton/NextButton";

function App() {
  const [carstatuses, setCarstatuses] = useState([
    [false, false, false],
    [false, false, false],
    [false, false, false],
  ]);

  const click = (x, y) => {
    setCarstatuses((prev) => {
      const newPrev = prev;
      newPrev[x][y] = !newPrev[x][y];
      return newPrev;
    });
  };
  return (
    <div>
      <CarStatus
        title={"후드"}
        statuses={carstatuses[0]}
        clicked={click}
        row={0}
      />
      <CarStatus
        title={"프론트펜터(L)"}
        statuses={carstatuses[1]}
        clicked={click}
        row={1}
      />
      <CarStatus
        title={"프론트펜터(R)"}
        statuses={carstatuses[2]}
        clicked={click}
        row={2}
      />
      <NextButton />
    </div>
  );
}

export default App;
