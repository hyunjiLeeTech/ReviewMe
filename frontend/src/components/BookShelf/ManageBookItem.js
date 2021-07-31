import "./ManageBookItem.css";

const ManageBookItem = (props) => {
  const {
    getManageBookShelf,
    type,
    itemIndex,
    image,
    title,
    author,
    bookId,
    isSelected,
  } = props;

  return (
    <button
      className={
        !isSelected
          ? "col-6 col-md-4 col-lg-3 bookItemContainer"
          : "col-6 col-md-4 col-lg-3 selectbookItemContainer"
      }
      onClick={() => {
        getManageBookShelf(type, itemIndex);
      }}
    >
      <div className="text-center">
        <img className="image" src={image} alt={title} />
        <div className="bookInfoContainer">
          <h4>{title}</h4>
          <p>{author}</p>
        </div>
      </div>
    </button>
  );
};

export default ManageBookItem;
