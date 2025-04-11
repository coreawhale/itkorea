import { CurrentTime } from "../../shared/util/whatTime";
import styles from "./Calendar.module.css";
import ClockText from "./components/ClockText";
import TimeText from "./components/TimeText";

const Calendar = () => {
  return (
    <div className={styles.parents_layout}>
      <div className={styles.layout}>
        {CurrentTime().map((v) => (
          <TimeText text={v} />
        ))}
      </div>
      <ClockText />
    </div>
  );
};

export default Calendar;
