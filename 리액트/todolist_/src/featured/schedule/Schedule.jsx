import Task from "./components/Task";
import styles from "./Schedule.module.css";

const Schedule = () => {
  return (
    <div className={styles.layout}>
      <Task text={"유튜브보기"} />
      <Task text={"인스타보기"} />
      <Task text={"쓰레드보기"} />
    </div>
  );
};

export default Schedule;
