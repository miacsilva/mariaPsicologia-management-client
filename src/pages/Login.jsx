import React, { useState, useContext } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth.context";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);

  const { authenticateUser } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/auth/login`,
        {
          email,
          password,
        }
      );

      localStorage.setItem("authToken", response.data.authToken);

      authenticateUser();

      console.log(response.data.authToken);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const navigate = useNavigate();

  return (
    <section className="loginSection">
      <h3>*Acesso restrito à administração</h3>
      <h1>Login</h1>
      <br />

      <form onSubmit={handleSubmit} className="formLogin">
        <div className="emailLogin">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={handleEmail}
          />
        </div>

        <div className="passwordLogin">
          <label htmlFor="password"> Password</label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={handlePassword}
          />
        </div>

        <button type="submit" className="buttonLogin">
          Login
        </button>
      </form>
    </section>
  );
}

export default Login;
