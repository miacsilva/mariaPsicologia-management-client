import React, { useState, useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import axios from "axios";

//COMPONENTS
import projectService from "../services/project.service";

function EditColaborator() {
  const { user, logout } = useContext(AuthContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //handle functions

  const handleName = (e) => setName(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);

  const { id } = useParams();
  const navigate = useNavigate();

  const getSingleUser = async () => {
    try {
      const response = await projectService.getSingleUser(id);
      console.log(response.data);
      setName(response.data.name);
      setEmail(response.data.email);
      setPassword(response.data.password);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSingleUser();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const requestData = { name, email, password };

    try {
      await projectService.editUser({ id, requestData });

      navigate(`/user/${id}`);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <section className="colaboratorsSection">
        {user && user.admin && (
          <>
            <form onSubmit={handleSubmit}>
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                name="name"
                id="name"
                value={name}
                onChange={handleName}
              />

              <label htmlFor="email">Email:</label>
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={handleEmail}
              />

              <label htmlFor="password">Password:</label>
              <input
                type="password"
                password="password"
                id="password"
                value={password}
                onChange={handlePassword}
              />
              <button type="submit">Edit Project</button>
            </form>
          </>
        )}
      </section>
    </>
  );
}

export default EditColaborator;
