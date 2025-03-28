import Price from "./Price";

const ClassType = (props) => {
  return (
    <>
      <Title {...props} />
      <Option {...props} />
      <Price {...props} />
    </>
  );
};

export default ClassType;
