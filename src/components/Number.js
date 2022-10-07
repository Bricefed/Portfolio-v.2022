const Number = ({ value }) => {
  return (
    <h3>
      {value}
      <img src={"./icons/triangle.png"} alt="Triangle" className="triangle" />
    </h3>
  );
};

export default Number;
