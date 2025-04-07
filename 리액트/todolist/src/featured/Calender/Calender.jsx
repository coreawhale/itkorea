import styles from "./Calender.module.css";
import Text from "./components/Text";
const Calender = () => {
  const [day, date, month, year] = new Date().toUTCString().split(" ");

  return (
    <div className={styles.layout}>
      <Text text={day} />
      <Text text={date} />
      <Text text={month} />
      <Text text={year} />
    </div>
  );
};

export default Calender;
