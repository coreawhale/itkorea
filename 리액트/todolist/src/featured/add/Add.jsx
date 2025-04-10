import Input from "../../shared/base/Input/Input";
import Button from "../../shared/base/Button/Button";
import styles from "./Add.module.css";

const Add = (props) => {
  return (
    <div className={styles.layout}>
      <Input addValue={props.setValue} />
      <Button
        text={"+"}
        add={() => {
          props.addTask();
        }}
      />
    </div>
  );
};

export default Add;
