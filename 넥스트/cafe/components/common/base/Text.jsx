const Text = ({ children, className = "", Component = "span" }) => {
  return (
    <Component className={`text-gray-700 ${className}`}>{children}</Component>
  );
};

export default Text;
