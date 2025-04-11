import Input from "../../shared/base/Input/Input";
import Button from "../../shared/base/Button/Button";
import styles from "./Add.module.css";
import { useEffect, useState } from "react";

const Add = (props) => {
  const [value, setValue] = useState("");

  const addTask = () => {
    props.setTasks((prev) => {
      const trimValue = value.trim();
      return !trimValue ? prev : [...prev, trimValue];
    });
  };

  // 랜더링시점에서 localStorage 1회 초기화
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("todolist")) || [];
    // 초기화하는 함수임
    props.setTasks((prev) => {
      const newPrev = [...prev, ...data];
      return newPrev;
    });
  }, []);

  // props로 받은 tasks의 내용이 바뀌면, 바뀐 tasks의 내용을 추가해서 todolist에 넣어준다.
  useEffect(() => {
    localStorage.setItem("todolist", JSON.stringify(props.tasks));
  }, [props.tasks]);

  const resetTask = () => {
    props.setTasks(() => {
      return [];
    });
  };

  return (
    <div className={styles.layout}>
      <Input addValue={setValue} />
      <Button text={"+"} event={addTask} />{" "}
      {/* event props로 보내서, 온클릭으로 해당 함수 실행하게 만들기 */}
      <Button text={"reset"} event={resetTask} />
    </div>
  );
};

export default Add;
