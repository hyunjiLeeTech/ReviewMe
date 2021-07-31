import "./ManageBookItem.css";

const ManageBookItem = (props) => {
  const { image, title, author, bookId, isSelected } = props;
  console.log(isSelected);
  return (
    <button
      className={
        !isSelected
          ? "col-6 col-md-4 col-lg-3 bookItemContainer"
          : "col-6 col-md-4 col-lg-3 selectbookItemContainer"
      }
      onClick={() => {
        alert(bookId);
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
