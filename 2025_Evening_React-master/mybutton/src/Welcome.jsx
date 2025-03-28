//props = {name:?,emoji:?,handclick:?,color:?}

const Welcome = (props) => {
  return (
    <h1 onClick={props.handleclick} style={{ color: props.color }}>
      Hello, {props.name}!{props.emoji}
    </h1>
  );
};

export default Welcome;
