import Text from "../base/Text";

const Paragraph = ({ children, className = "" }) => {
  return (
    <Text className={className} Component="p">
      {children}
    </Text>
  );
};

export default Paragraph;
