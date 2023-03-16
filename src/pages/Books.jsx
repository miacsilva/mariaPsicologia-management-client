//PACKAGES
import { useState, useEffect, useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import axios from "axios";

//COMPONENTS
import photo from "../assets/images/book2.jpg";
import projectService from "../services/project.service";

function Books() {
  const { user, logout } = useContext(AuthContext);
  const [books, setBooks] = useState([]);

  const getAllBooks = async () => {
    try {
      const response = await projectService.getAllBooks();
      /* console.log(response.data); */
      setBooks(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllBooks();
  }, []);
  return (
    <>
      {books.length && (
        <>
          <section className="booksSection">
            <h1>Books</h1>
            {user && (
              <NavLink to="/books/create">
                <button className={"editButton"}>Add new book</button>
              </NavLink>
            )}
          </section>
          <hr className="separatorAppointments" />
          <section className="booksSectionBooksCards container">
            {books &&
              books.map((book) => {
                return (
                  <NavLink
                    to={`/books/${book._id}`}
                    key={book._id}
                    className={"booksCards row"}
                  >
                    <img
                      src={book.image}
                      alt={book.title}
                      className={"booksCardsImage"}
                    />
                    <h3 className={"booksCardsTitle"}>{book.title}</h3>
                    {user && (
                      <NavLink
                        to={`/books/edit/${book._id}`}
                        className={"editBooksButton"}
                      >
                        <button>Edit this book</button>
                      </NavLink>
                    )}
                  </NavLink>
                );
              })}
          </section>
        </>
      )}
    </>
  );
}

export default Books;
