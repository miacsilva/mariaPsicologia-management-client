import React, { useState, useEffect } from "react";
import axios from "axios";
import projectService from "../services/project.service";
import book1 from "../assets/images/book1.jpg";
import book2 from "../assets/images/book2.jpg";
import fnac1 from "../assets/images/fnac1.jpg";
import fnac2 from "../assets/images/fnac2.jpg";

function Home() {
  const [books, setBooks] = useState([]);

  const getBooks = async () => {
    try {
      const response = await projectService.getAllBooks();
      console.log(response.data);
      /* setBooks(response.data); */
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
      <div
        id="carouselExampleInterval"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="2000">
            <img src={book1} className="d-block w-100" alt="book1" />
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img src={book2} className="d-block w-100" alt="book2" />
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img src={fnac1} className="d-block w-100" alt="fnac2" />
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img src={fnac2} className="d-block w-100" alt="fnac2" />
          </div>
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
    </>
  );
}

export default Home;
