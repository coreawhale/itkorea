type ContentsProps = { content: string };
type Colorprops = { color: string };
type TextProps = ContentsProps & Colorprops;
const Text = ({ content, color }: TextProps) => {
  return <p style={{ color: color }}>{content}</p>;
};

export default Text;
