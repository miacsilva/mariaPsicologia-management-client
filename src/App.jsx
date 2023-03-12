//PACKAGES
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { NavLink } from "react-router-dom";
import axios from "axios";

//COMPONENTS
import projectService from "./services/project.service";
import About from "./pages/About";
import Appointments from "./pages/Appointments";
import Books from "./pages/Books";
import Contacts from "./pages/Contacts";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

//pics to remove
import book1 from "./assets/images/book1.jpg";
import book2 from "./assets/images/book2.jpg";
import fnac1 from "./assets/images/fnac1.jpg";
import fnac2 from "./assets/images/fnac2.jpg";

//CSS

import "./App.css";
import MonthlySubject from "./pages/MonthlySubject";

function App() {
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
    <div className="App">
      <Navbar />
      {books.length && (
        <div
          id="carouselExampleInterval"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <NavLink to="/about">
              <div className="carousel-item active" data-bs-interval="4000">
                <img
                  src={book1}
                  className="d-block w-100 carouselImage"
                  alt="book1"
                />
              </div>
            </NavLink>
            <NavLink to="/books">
              <div className="carousel-item" data-bs-interval="4000">
                <img
                  src={book2}
                  className="d-block w-100 carouselImage"
                  alt="book2"
                />
              </div>
            </NavLink>

            {/* add monthly subject with onclick to monthly subject */}
            <NavLink to="/appointments">
              <div className="carousel-item" data-bs-interval="4000">
                <img
                  src={fnac1}
                  className="d-block w-100 carouselImage"
                  alt="fnac2"
                />
              </div>
            </NavLink>
            <NavLink to="/contacts">
              <div className="carousel-item" data-bs-interval="4000">
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

      <Routes className="sections">
        <Route path="/about" element={<About />} />
        <Route path="/appointments" element={<Appointments />} />
        <Route path="/books" element={<Books />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/" element={<Home about={about} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/monthly-subject" element={<MonthlySubject />} />
      </Routes>

      <Footer books={books} contacts={contacts} />
    </div>
  );
}

export default App;
