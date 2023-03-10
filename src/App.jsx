//PACKAGES
import { useState } from "react";
import { Routes, Route } from "react-router-dom";

//COMPONENTS
import About from "./pages/About";
import Appointments from "./pages/Appointments";
import Books from "./pages/Books";
import Contacts from "./pages/Contacts";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import MonthlySubject from "./components/MonthlySubject";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

//CSS

import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/appointments" element={<Appointments />} />
        <Route path="/books" element={<Books />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/monthly-subject" element={<MonthlySubject />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
