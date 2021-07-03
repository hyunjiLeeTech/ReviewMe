import Title from "../style/Title";
import BookItem from "./BookItem";

import "./BookShelf.css";

const BookShelf = (props) => {
  const { title } = props;
  const bookShelfList = [
    {
      title: "Cooked",
      id: "be2XOQ2sB_EC",
      author: "Michael Pollan",
      image:
        "http://books.google.com/books/content?id=be2XOQ2sB_EC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    },
    {
      title: "You Suck at Cooking",
      id: "5KqxDwAAQBAJ",
      author: "Clarkson Potter, You Suck at Cooking",
      image:
        "http://books.google.com/books/content?id=5KqxDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    },
    {
      title:
        "The Essential New York Times Cookbook: Classic Recipes for a New Century",
      id: "QWrVBAAAQBAJ",
      author: "Amanda Hesser",
      image:
        "http://books.google.com/books/content?id=QWrVBAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    },
    {
      title: "Home Cooking",
      id: "TB4FEAAAQBAJ",
      author: "Laurie Colwin",
      image:
        "http://books.google.com/books/content?id=TB4FEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    },
    {
      title: "College Cooking",
      id: "UwYJsklz7WkC",
      author: "Megan Carle, Jill Carle",
      image:
        "http://books.google.com/books/content?id=UwYJsklz7WkC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    },
    {
      title: "Mastering the Art of Soviet Cooking",
      id: "GGuODQAAQBAJ",
      author: "Anya Von Bremzen",
      image:
        "http://books.google.com/books/content?id=GGuODQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    },
    {
      title: "Salt, Fat, Acid, Heat",
      id: "yvqxDgAAQBAJ",
      author: "Samin Nosrat",
      image:
        "http://books.google.com/books/content?id=yvqxDgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    },
    {
      title: "Maangchi's Big Book of Korean Cooking",
      id: "ROJ-DwAAQBAJ",
      author: "Maangchi, Martha Rose Shulman",
      image:
        "http://books.google.com/books/content?id=ROJ-DwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    },
    {
      title: "Cooked",
      id: "be2XOQ2sB_EC",
      author: "Michael Pollan",
      image:
        "http://books.google.com/books/content?id=be2XOQ2sB_EC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    },
    {
      title: "Where Cooking Begins",
      id: "A9hhDwAAQBAJ",
      author: "Carla Lalli Music",
      image:
        "http://books.google.com/books/content?id=A9hhDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    },
    {
      title: "The Science of Cooking",
      id: "az8pDwAAQBAJ",
      author: "Stuart Farrimond",
      image:
        "http://books.google.com/books/content?id=az8pDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    },
  ];
  return (
    <div className="container bookShelfContainer">
      <Title name={title} />
      <div className="row justify-content-first bookItemcontainer">
        {bookShelfList.map((data, index) => (
          <BookItem
            image={data.image}
            title={data.title}
            author={data.author}
            bookId={data.id}
          />
        ))}
      </div>
    </div>
  );
};

export default BookShelf;
