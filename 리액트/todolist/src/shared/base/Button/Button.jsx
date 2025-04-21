import "./Button.css";

const Button = (props) => {
  return (
    <button onClick={props.event} className="button-19">
      {props.text}
    </button>
  );
};

export default Button;
