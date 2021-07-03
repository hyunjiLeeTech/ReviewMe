import "./Button.css";

const Button = (props) => {
  const { name, isMargin, isRedirect, link } = props;

  const openInNewTab = (url) => {
    console.log(url);
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  const addData = () => {
    alert(`Add this book on the ${name}`);
  };

  return (
    <button
      className={isMargin === true ? "button buttonWithMargin" : "button"}
      onClick={isRedirect ? () => openInNewTab(link) : () => addData()}
    >
      {name}
    </button>
  );
};

export default Button;
