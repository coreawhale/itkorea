import styles from "./Input.module.css";

const Input = (props) => {
  return (
    <div className={styles.inputBox}>
      <input
        onChange={(e) => props.addValue((prev) => e.target.value)}
        type="text"
        className={styles.input}
      />
    </div>
  );
};

export default Input;
