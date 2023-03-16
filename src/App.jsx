//PACKAGES
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { NavLink } from "react-router-dom";
import axios from "axios";

//COMPONENTS BASE
import projectService from "./services/project.service";
import About from "./pages/About";
import Appointments from "./pages/Appointments";
import Books from "./pages/Books";
import Contacts from "./pages/Contacts";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Error from "./pages/Error";
import Therapies from "./pages/Therapies";
import MonthlySubjects from "./pages/MonthySubjects";

//COMPONENTS EXTRA
import Private from "./components/Private";
import CreateColaborator from "./pagesToEdit/CreateColaborator";
import ViewColaborators from "./pages/ViewColaborators";
import AddTherapies from "./pagesToEdit/addTherapies";
import EditAbout from "./pagesToEdit/EditAbout";
import ViewBook from "./pages/ViewBook";
import CreateBook from "./pagesToEdit/CreateBook";
import EditBook from "./pagesToEdit/EditBook";
import EditContacts from "./pagesToEdit/EditContacts";
import EditTherapy from "./pagesToEdit/EditTherapy";
import CreateMonthlySubject from "./pagesToEdit/CreateMonthlySubject";
import EditMonthlySubject from "./pagesToEdit/EditMonthlySubject";

//CSS

import "./App.css";

function App() {
  const [books, setBooks] = useState([]);
  const [contacts, setContacts] = useState([]);

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
    getBooks();
    getContacts();
  }, []);

  /* /*  /*--- NAVBAR HIDE/SHOW --- */
  let lastScrollUp; // This Varibale will store the top position

  let navbar = document.getElementById("navbar"); // Get The NavBar

  window.addEventListener("scroll", function () {
    //on every scroll this funtion will be called
    let scrollUp = window.pageYOffset || document.documentElement.scrollUp;
    //This line will get the location on scroll

    if (scrollUp > lastScrollUp) {
      //if it will be greater than the previous
      navbar.style.top = "-40vh";
      //set the value to the negetive of height of navbar
    } else {
      navbar.style.top = "0";
    }

    lastScrollUp = scrollUp; //New Position Stored
  });
  /*--- NAVBAR HIDE/SHOW END--- */
  return (
    <div className={"App"}>
      <Navbar />

      <Routes>
        <Route path="/about" element={<About />} />
        <Route
          path="/about/edit/:id"
          element={
            <Private>
              <EditAbout />
            </Private>
          }
        />
        <Route
          path="/appointments"
          element={<Appointments contacts={contacts} />}
        />
        <Route path="/books" element={<Books />} />
        <Route
          path="/books/create"
          element={
            <Private>
              <CreateBook />
            </Private>
          }
        />
        <Route path="/books/:id" element={<ViewBook />} />
        <Route
          path="/books/edit/:id"
          element={
            <Private>
              <EditBook />
            </Private>
          }
        />
        <Route path="/contacts" element={<Contacts />} />
        <Route
          path="/contacts/edit/:id"
          element={
            <Private>
              <EditContacts />
            </Private>
          }
        />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/colaborators"
          element={
            <Private>
              <ViewColaborators />
            </Private>
          }
        />
        <Route
          path="/createColaborator"
          element={
            <Private>
              <CreateColaborator />
            </Private>
          }
        />
        <Route
          path="/create/monthly-subject"
          element={
            <Private>
              <CreateMonthlySubject />
            </Private>
          }
        />
        <Route
          path="/monthly-subject/edit/:id"
          element={
            <Private>
              <EditMonthlySubject />
            </Private>
          }
        />
        <Route path="/monthlySubjects" element={<MonthlySubjects />} />

        <Route path="*" element={<Error />} />
        <Route
          path="/add-therapies"
          element={
            <Private>
              <AddTherapies />
            </Private>
          }
        />
        <Route path="/therapies" element={<Therapies />} />
        <Route
          path="/therapies/edit/:id"
          element={
            <Private>
              <EditTherapy />
            </Private>
          }
        />
      </Routes>

      <Footer books={books} contacts={contacts} />
    </div>
  );
}

export default App;
