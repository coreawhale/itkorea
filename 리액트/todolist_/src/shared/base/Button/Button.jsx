import "./Button.css";

const Button = (props) => {
  return (
    <button className="button-5">
      <span class="text">{props.name}</span>
    </button>
  );
};

export default Button;
