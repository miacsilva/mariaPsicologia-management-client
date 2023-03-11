//PACKAGES
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";

//COMPONENTS
import projectService from "../services/project.service";
import AboutHome from "../components/AboutHome";
import MonthlySubject from "../components/MonthlySubject";
import book1 from "../assets/images/book1.jpg";
import book2 from "../assets/images/book2.jpg";
import fnac1 from "../assets/images/fnac1.jpg";
import fnac2 from "../assets/images/fnac2.jpg";

//CSS

function Home() {
  const [books, setBooks] = useState([]);

  const getBooks = async () => {
    try {
      const response = await projectService.getAllBooks();
      /* console.log(response.data); */
      setBooks(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBooks();
  }, []);

  //call axios

  //call effect
  return (
    <>
      {books.length && (
        <div
          id="carouselExampleInterval"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <NavLink to="/about">
              <div className="carousel-item active" data-bs-interval="2000">
                <img
                  src={book1}
                  className="d-block w-100 carouselImage"
                  alt="book1"
                />
                {/* <h1>{books[0].title}</h1> */}
              </div>
            </NavLink>
            <NavLink to="/books">
              <div className="carousel-item" data-bs-interval="2000">
                <img
                  src={book2}
                  className="d-block w-100 carouselImage"
                  alt="book2"
                />
                {/* <h1>{books[0].description}</h1> */}
              </div>
            </NavLink>

            {/* add monthly subject with onclick to monthly subject */}
            <NavLink to="/appointments">
              <div className="carousel-item" data-bs-interval="2000">
                <img
                  src={fnac1}
                  className="d-block w-100 carouselImage"
                  alt="fnac2"
                />
              </div>
            </NavLink>
            <NavLink to="/contacts">
              <div className="carousel-item" data-bs-interval="2000">
                <img
                  src={fnac2}
                  className="d-block w-100 carouselImage"
                  alt="fnac2"
                />
              </div>
            </NavLink>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      )}

      <AboutHome />
      <MonthlySubject />
    </>
  );
}

export default Home;
