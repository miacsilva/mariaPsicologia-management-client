import { useState, useEffect, createContext } from "react";
import axios from "axios";

const AuthContext = createContext();

function AuthWrapper(props) {
  const [loggedIn, setLoggedIn] = useState(false); //always starts false
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); //always starts true

  //functions and methods

  const authenticateUser = async () => {
    //check for a token
    const storedToken = localStorage.getItem("authToken");

    //if the token exists
    if (storedToken) {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/auth/verify`,
          {
            headers: {
              Authorization: `Bearer ${storedToken}`,
            },
          }
        );

        //here we know that the response is okay so we can update the states
        setLoggedIn(true);
        setUser(response.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        //here we know we got an error
        setLoggedIn(false);
        setUser(null);
        setLoading(false);
      }
    } else {
      setLoggedIn(false);
      setUser(null);
      setLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem("authToken");
    authenticateUser();
  };

  useEffect(() => {
    authenticateUser();
  }, []);

  return (
    <AuthContext.Provider
      value={{ loggedIn, user, loading, authenticateUser, logout }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthWrapper };
