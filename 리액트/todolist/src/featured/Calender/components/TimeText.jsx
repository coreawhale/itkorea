import Text from "../../../shared/base/text/Text";
import styles from "./TimeText.module.css";

const TimeText = (props) => {
  return <Text text={props.text} className={styles.timeText} />;
};

export default TimeText;
