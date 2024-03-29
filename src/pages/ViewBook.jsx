import React, { useState, useEffect, useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import axios from "axios";

//COMPONENTS
import projectService from "../services/project.service";

function ViewBook() {
  const { user, logout } = useContext(AuthContext);
  const [book, setBook] = useState([]);
  const [languages, setLanguages] = useState([]);

  const { id } = useParams();
  const navigate = useNavigate();

  const getSingleBook = async (id) => {
    try {
      const response = await projectService.getSingleBook(id);
      console.log(typeof response.data);
      setBook(response.data);
      setLanguages(response.data.languages);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSingleBook(id);
  }, []);
  return (
    <>
      {book && (
        <>
          <section className="singleBooksSection">
            <h1>{book.title}</h1>
            {user && (
              <NavLink to="/books">
                <button className={"editButton"}>Go Back</button>
              </NavLink>
            )}
          </section>
          <hr className="separatorAppointments" />

          <section className="booksIdSection">
            <div className="upperSingleBook">
              <img src={book.image} alt={book.title} className="bookIdImage" />

              <p className="bookIdDescription">{book.description}</p>
            </div>

            <br />

            <details className="booksIdSection__info">
              <summary>Ver Detalhes</summary>

              <p>Autor: {book.author}</p>
              <p>Editora: {book.publisher}</p>
              <p>Data de publicação: {book.publishedDate}</p>
              <p>
                Idiomas:
                {languages.map((language, i) => {
                  return i === languages.length - 1
                    ? ` ${language} `
                    : ` ${language},`;
                })}
              </p>
              <p>Páginas: {book.pages}</p>
            </details>

            <div className="containerButtonEnVersion">

              {id === "64133c41484223ff3b850fb2" && (

            <NavLink to="/books/647768c249f6aebaf5fe44df" key={"647768c249f6aebaf5fe44df"}>
              <button className={"seeEnVersionBtn"}>
              Ver edição em Inglês 
              </button>
            </NavLink>


            
              )}
            </div>
          </section>
        </>
      )}
    </>
  );
}

export default ViewBook;
