import Text from "../../../shared/base/text/Text";
import styles from "../Schedule.module.css";

const TaskText = (props) => {
  return (
    <Text
      text={props.text}
      className={`${styles.task} ${props.isDone && styles.done}`}
    />
  );
};

export default TaskText;
