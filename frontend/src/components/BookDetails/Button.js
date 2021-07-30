import "./Button.css";

const Button = (props) => {
  const { bookshelf, addBookShelfInfo, name, isMargin, isRedirect, link } =
    props;

  const openInNewTab = (url) => {
    console.log(url);
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  const addData = () => {
    const bookId = addBookShelfInfo.bookId;
    console.log(bookId);
    if (name === "Library") {
      let isExist = checkExist(bookId);

      if (isExist) {
        alert("This book is already on the library");
      } else {
      }
    }

    if (name === "Wish List") {
      let isExist = checkExist(bookId);

      if (isExist) {
        alert("This book is already on the wish list");
      } else {
      }
    }
  };

  const checkExist = (bookId) => {
    for (let i = 0; i < bookshelf.length; i++) {
      if (bookshelf[i].bookid === bookId) {
        return true;
      }
    }

    return false;
  };

  return (
    <button
      className={isMargin === true ? "btn buttonWithMargin" : "btn details"}
      onClick={isRedirect ? () => openInNewTab(link) : () => addData()}
    >
      {name}
    </button>
  );
};

export default Button;
