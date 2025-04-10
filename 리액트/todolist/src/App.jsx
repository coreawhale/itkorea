import { useState } from "react";
import Calendar from "./featured/Calendar/Calendar";
import Schedule from "./featured/schedule/Schedule";
import Layout from "./layout/Layout";
import Add from "./featured/add/Add";

function App() {
  const [tasks, setTasks] = useState([]);
  const [value, setValue] = useState("");

  const addTask = () => {
    setTasks((prev) => {
      const trimValue = value.trim();
      return !trimValue ? prev : [...tasks, trimValue];
    });
  };
  return (
    <Layout>
      <Calendar />
      <Schedule taskList={tasks} />
      <Add setValue={setValue} addTask={addTask} />
    </Layout>
  );
}

export default App;
