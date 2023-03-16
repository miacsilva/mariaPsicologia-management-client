import React, { useState, useContext } from "react";
import axios from "axios";
import { NavLink, useNavigate, useParams } from "react-router-dom";

import { AuthContext } from "../context/auth.context";

function CreateColaborator() {
  const { user, logout } = useContext(AuthContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleName = (e) => setName(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/auth/signup`,
        {
          name,
          email,
          password,
        }
      );
      console.log(response.data);
      navigate("/colaborators");
    } catch (error) {
      console.log(error);
    }
  };

  const navigate = useNavigate();

  return (
    <>
      <section className="contactsSection">
        <h1>Colaborator</h1>
        {user && (
          <NavLink to="/colaborators">
            <button className={"editButton"}>Go back</button>
          </NavLink>
        )}
      </section>
      <hr className="separatorAppointments" />
      <section className="createColaborator">
        <h1>Criar novo colaborador!</h1>

          
        <form onSubmit={handleSubmit} className={"createColaboratorForm"}>
          <div className="createColaborator__name">
            <label htmlFor="name"> Nome</label>
            <input
              type="text"
              name="name"
              id="name"
              value={name}
              onChange={handleName}
            />
          </div>

          <div className="createColaborator__email">
            <label htmlFor="email"> Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={handleEmail}
            />
          </div>

          <div className="createColaborator__password">
            <label htmlFor="password"> Password</label>
            <input
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={handlePassword}
            />
          </div>

          <button type="submit" className="buttonCreate">
            Criar nova conta de colaborador
          </button>
        </form>
      </section>
    </>
  );
}

export default CreateColaborator;
