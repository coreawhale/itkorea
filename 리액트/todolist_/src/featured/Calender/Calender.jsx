import { CurrentTime } from "../../shared/util/whatTime";
import styles from "./Calender.module.css";
import TimeText from "./components/TimeText";

const Calender = () => {
  return (
    <div className={styles.layout}>
      {CurrentTime().map((v) => (
        <TimeText text={v} />
      ))}
    </div>
  );
};

export default Calender;
