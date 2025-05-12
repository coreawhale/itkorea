import Box from "./Box";
import Button from "./Button";
import Btn from "./Btn";
import Circle from "./Circle";
import Text from "./Text";

function App() {
  return (
    <>
      <Box text="박스야" />
      <Circle text="동글이" />
      <Button backgroundColor="pink" borderRadius="50px" />
      <Text content="텍스트" color="blue" />
      {/* <Btn backgroundColor="#205bf3" borderRadius="0px" />
      <Btn backgroundColor="#205bf3" borderRadius="5px" />
      <Btn backgroundColor="#205bf3" borderRadius="10px" />
      <Btn backgroundColor="#478df5" borderRadius="0px" />
      <Btn backgroundColor="#478df5" borderRadius="5px" />
      <Btn backgroundColor="#478df5" borderRadius="10px" /> */}
      <Btn backgroundColor="primay" borderRadius="hard" />
      <Btn backgroundColor="primay" borderRadius="circle" />
      <Btn backgroundColor="primay" borderRadius="smooth" />
      <Btn backgroundColor="secondary" borderRadius="hard" />
      <Btn backgroundColor="secondary" borderRadius="circle" />
      <Btn backgroundColor="secondary" borderRadius="smooth" />
    </>
  );
}

export default App;
