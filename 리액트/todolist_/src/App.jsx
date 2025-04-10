import Calender from "./featured/Calender/Calender";
import Schedule from "./featured/schedule/Schedule";
import Layout from "./layout/Layout";
import Button from "./shared/base/Button/Button";

function App() {
  return (
    <div>
      <Layout>
        <Calender />
        <Schedule />
        <input />
        <Button name={"버튼 이름"} />
      </Layout>
    </div>
  );
}

export default App;
