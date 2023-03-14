import axios from "axios";

class ProjectService {
  constructor() {
    this.api = axios.create({
      baseURL: import.meta.env.VITE_API_URL || "http://localhost:5005",
      /* withCredentials: true  */
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

  errorHandler = (err) => {
    throw err;
  };

  //Here we can create the metods to connect to the API

  //Create User
  newUser = () => {
    return this.api.post("/auth/signup");
  };

  //Get User
  getUser = () => {
    return this.api.get("/api/user");
  };

  //get Single User
  getSingleUser = (id) => {
    return this.api.get(`/api/user/${id}`);
  };

  //Delete a user
  deleteUser = (id) => {
    return this.api.delete(`/api/user/${id}`);
  };

  //Get About
  getAbout = () => {
    return this.api.get("/api/about");
  };

  //Edit About
  editAbout = ({ id, requestData }) => {
    return this.api.put(`/api/about/edit/${id}`, requestData);
  };

  //Get Appointments
  getAppointments = () => {
    return this.api.get("/api/appointments");
  };

  //Get All Books
  getAllBooks = () => {
    return this.api.get("/api/books");
    //the line above is equivalent to:
    //axios.get(`${import.meta.env.VITE_API_URL}/api/projects`)
  };

  //Get Contacts
  getContacts = () => {
    return this.api.get("/api/contacts");
  };

  //Edit Contacts
  editContacts = ({ id, requestData }) => {
    return this.api.put(`/api/contacts/edit/${id}`, requestData);
  };

  //Get Therapies
  getTherapies = () => {
    return this.api.get("/api/therapies");
  };

  //Create Therapies
  createTherapy = (newTherapy) => {
    return this.api
      .post("/api/therapies", newTherapy)
      .then((res) => res.data)
      .catch(this.errorHandler);
  };

  //Get Montly Subject
  getMonthlySubject = () => {
    return this.api.get("/api/monthly-subject");
  };

  //cloudinary
  uploadImage = (file) => {
    return this.api
      .post("/api/upload", file)
      .then((res) => res.data)
      .catch(this.errorHandler);
  };
}

const projectService = new ProjectService();

export default projectService;
