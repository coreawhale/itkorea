const Button = (props: { bg: string; radius: number }) => {
  return (
    <button style={{ backgroundColor: props.bg, borderRadius: props.radius }}>
      버튼
    </button>
  );
};

export default Button;
