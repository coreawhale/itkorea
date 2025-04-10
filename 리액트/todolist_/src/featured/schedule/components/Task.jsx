import { useState } from "react";
import TaskText from "./TaskText";
import CheckBox from "../../../shared/base/CheckBox/CheckBox";
import styles from "./Task.module.css";

const Task = (props) => {
  const [isCheck, setIsCheck] = useState(false);
  return (
    <div className={styles.layout}>
      <TaskText isDone={isCheck} text={props.text} />
      <CheckBox setIsChecked={setIsCheck} />
    </div>
  );
};

export default Task;
