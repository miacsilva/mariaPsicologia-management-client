import React, { useState, useEffect, useContext } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import axios from "axios";

//COMPONENTS
import projectService from "../services/project.service";

function ViewBook() {
  const { user, logout } = useContext(AuthContext);
  const [book, setBook] = useState([]);

  const { id } = useParams();
  const navigate = useNavigate();

  const getSingleBook = async (id) => {
    try {
      const response = await projectService.getSingleBook(id);
      /* console.log(response.data); */
      setBook(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSingleBook(id);
  }, []);
  return (
    <>
      <section className="booksSection">
        <h1>{book.title}</h1>
        {user && (
          <NavLink to="/books">
            <button className={"editButton"}>Go Back</button>
          </NavLink>
        )}
      </section>
      <section className="booksIdSection">
        {/* <h4>{book.title}</h4> */}
        <img src={book.image} alt={book.title} className="bookIdImage" />
        <p className="bookIdDescription">{book.description}</p>
        <br />
        <div className="booksIdSection__info">
          <p>Author: {book.author}</p>
          <p>Publisher: {book.publisher}</p>
          <p>Published date: {book.publishedDate}</p>
          <p>Languages available in: {book.languages}</p>
          <p>Pages: {book.pages}</p>
        </div>
      </section>
    </>
  );
}

export default ViewBook;
