import { useEffect, useState } from "react";
import Calendar from "./featured/Calendar/Calendar";
import Schedule from "./featured/schedule/Schedule";
import Layout from "./layout/Layout";
import Add from "./featured/add/Add";

function App() {
  const [tasks, setTasks] = useState([]);

  return (
    <Layout>
      <Calendar />
      <Schedule taskList={tasks} />
      <Add setTasks={setTasks} tasks={tasks} />
    </Layout>
  );
}

export default App;
