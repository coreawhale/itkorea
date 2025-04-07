import styles from "./Button.module.css";

const Button = (props) => {
  const classList = {
    white: styles.white,
    sky: styles.sky,
    gray: styles.gray,
    trans: styles.trans,
  };

  console.log(classList);

  return (
    <button className={`${styles.button} ${classList[props.type]}}`}>
      {props.text}
      {classList[props.type]}
    </button>
  );
};

export default Button;
