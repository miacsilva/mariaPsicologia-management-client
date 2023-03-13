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
            <h1>Books {books[0].title}</h1>
            {user && (
              <NavLink to="/books/edit">
                <button className={"editButton"}>Edit Books Section</button>
              </NavLink>
            )}
          </section>
        </>
      )}
    </>
  );
}

export default Books;
