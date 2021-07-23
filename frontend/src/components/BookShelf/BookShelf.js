import Title from "../style/Title";
import BookItem from "./BookItem";

import "./BookShelf.css";

const BookShelf = (props) => {
  const { title, subTitle, items } = props;

  const displayBookShelf = () => {
    return items.map((data, index) => (
      <BookItem
        key={index}
        image={data.bookcover}
        title={data.booktitle}
        author={data.author}
        bookId={data.bookid}
      />
    ));
  };

  return (
    <div className="container bookShelfContainer">
      <Title name={title} />
      <h5 className="subTitle">{subTitle}</h5>
      <div className="row justify-content-first bookItemcontainer">
        {displayBookShelf()}
      </div>
    </div>
  );
};

export default BookShelf;
