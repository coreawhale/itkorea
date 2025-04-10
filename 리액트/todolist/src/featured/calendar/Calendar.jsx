import { CurrentTime } from "../../shared/util/whatTime";
import styles from "./Calendar.module.css";
import TimeText from "./components/TimeText";

const Calendar = () => {
  return (
    <div className={styles.layout}>
      {CurrentTime().map((v) => (
        <TimeText text={v} />
      ))}
    </div>
  );
};

export default Calendar;
