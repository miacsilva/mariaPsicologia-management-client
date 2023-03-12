import axios from "axios";

class ProjectService {
  constructor() {
    this.api = axios.create({
      baseURL: import.meta.env.VITE_API_URL || "http://localhost:5005",
    });

    //here we intercept every request thtat uses this api and call a middleware function
    this.api.interceptors.request.use((config) => {
      //inside this middleware function the first thing we do is get the token from the localstorage
      const storedToken = localStorage.getItem("authToken");

      //if there is a token we're going to add it to the headers of the request
      if (storedToken) {
        //here we pass to the headers an object with Authorization and the Bearer token
        config.headers = { Authorization: `Bearer ${storedToken}` };
      }

      return config;
    });
  }

  //Here we can create the metods to connect to the API

  //Get All Books
  getAllBooks = () => {
    return this.api.get("/api/books");
    //the line above is equivalent to:
    //axios.get(`${import.meta.env.VITE_API_URL}/api/projects`)
  };

  //Get About
  getAbout = () => {
    return this.api.get("/api/about");
  };

  //Get Contacts
  getContacts = () => {
    return this.api.get("/api/contacts");
  };

  //Get Montly Subject
  getMonthlySubject = () => {
    return this.api.get("/api/monthly-subject");
  };

  /* //Create a project
  //requestData refers to the object with title and description
  createProject = (requestData) => {
    return this.api.post("/api/projects", requestData);
  };

  //getbyId

  getSingleProject = (id) => {
    return this.api.get(`/api/projects/${id}`);
  };

  //update

  editProject = ({ id, requestData }) => {
    return this.api.put(`/api/projects/${id}`, requestData);
  };

  //Delete a project
  deleteProject = (id) => {
    return this.api.delete(`/api/projects/${id}`);
  }; */
}

const projectService = new ProjectService();

export default projectService;
