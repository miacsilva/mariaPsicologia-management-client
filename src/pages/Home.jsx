//PACKAGES
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";

//COMPONENTS
import projectService from "../services/project.service";
import AboutHome from "../components/AboutHome";
import MonthlySubject from "../components/MonthlySubjectComponent";

//pics to remove
import carrossel1 from "../assets/images/book2.jpg";
import carrossel2 from "../assets/images/FotoCarrossel.jpg";
import carrossel3 from "../assets/images/book2.jpg";
import carrossel4 from "../assets/images/book2.jpg";
import scroll from "../assets/images/scroll.png";

function Home() {
  const [about, setAbout] = useState([]);
  const [books, setBooks] = useState([]);
  const [contacts, setContacts] = useState([]);

  const getAbout = async () => {
    try {
      const response = await projectService.getAbout();
      /* console.log(response.data); */
      setAbout(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getBooks = async () => {
    try {
      const response = await projectService.getAllBooks();
      /* console.log(response.data); */
      setBooks(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getContacts = async () => {
    try {
      const response = await projectService.getContacts();
      /* console.log(response.data); */
      setContacts(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAbout();
    getBooks();
    getContacts();
  }, []);

  return (
    <>
      <div className="homeContainer">
        <div className="nameContainer">
          <h1 className="nameTitle">Maria Luísa Silva</h1>
          <h2 className="presentationTitle">
            Psicologia | Desenvolvimento Pessoal 
          </h2>
        </div>
      </div>
      <div className="iconContainer">
        <img src={scroll} className="scroll" alt="scroll icon" />
      </div>



{/* ------------CAROUSEL-------------------------------- */}
     {/*  {books.length && (
        <div className="carousselContainer">
          <div
            id="carouselExampleInterval"
            className="carousel slide carrossel"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner carrossel2">
              <NavLink to="/about">
                <div className="carousel-item active" data-bs-interval="4000">
                  <img
                    src={carrossel1}
                    className="d-block w-100 carouselImage"
                    alt="book1"
                  />
                </div>
              </NavLink>
              <NavLink to="/books">
                <div className="carousel-item" data-bs-interval="4000">
                  <img
                    src={carrossel2}
                    className="d-block w-100 carouselImage"
                    alt="book2"
                  />
                </div>
              </NavLink>

              <NavLink to="/appointments">
                <div className="carousel-item" data-bs-interval="4000">
                  <img
                    src={carrossel3}
                    className="d-block w-100 carouselImage"
                    alt="fnac2"
                  />
                </div>
              </NavLink>
              <NavLink to="/contacts">
                <div className="carousel-item" data-bs-interval="4000">
                  <img
                    src={carrossel4}
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
        </div>
      )} */}

      {/* ------------CAROUSEL FIM-------------------------------- */}
      <AboutHome />
      <MonthlySubject />
    </>
  );
}

export default Home;
