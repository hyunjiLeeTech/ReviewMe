import "./Button.css";

const Button = (props) => {
  const { name, isMargin } = props;
  return (
    <button
      className={isMargin === true ? "button buttonWithMargin" : "button"}
    >
      {name}
    </button>
  );
};

export default Button;
