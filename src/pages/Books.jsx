//PACKAGES
import { useState, useEffect, useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import axios from "axios";

//COMPONENTS
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
              <NavLink to="/books/edit">
                <button className={"editButton"}>Edit Books Section</button>
              </NavLink>
            )}
          </section>
          <section className="booksSectionBooksCards">
            {books &&
              books.map((book) => {
                return (
                  <div key={book._id} className={"booksCards"}>
                    <img
                      src={book.image}
                      alt={book.title}
                      className={"booksCardsImage"}
                    />
                    <h1>{book.title}</h1>
                  </div>
                );
              })}
          </section>
        </>
      )}
    </>
  );
}

export default Books;
