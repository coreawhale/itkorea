const Container = ({ children, className = "" }) => {
  return (
    <section className={`w-full max-w-7xl mx-auto ${className} py-10`}>
      {children}
    </section>
  );
};

export default Container;
