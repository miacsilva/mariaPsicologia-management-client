import React, { useState, useEffect, useContext } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

//COMPONENTS
import { AuthContext } from "../context/auth.context";
import projectService from "../services/project.service";
import DeleteConfirmation from "../components/DeleteConfirmation";

///////////////////////
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
/////////////////////////

const names = ["PT", "EN", "FR", "ES"];

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function getStyles(name, languages, theme) {
  return {
    fontWeight:
      languages.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

function EditAbout() {
  const { user, logout } = useContext(AuthContext);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [publisher, setPublisher] = useState();
  const [author, setAuthor] = useState("");
  /* const [languages, setLanguages] = useState(""); */
  const [pages, setPages] = useState(null);

  const { id } = useParams();
  const navigate = useNavigate();

  //
  const [displayConfirmationModal, setDisplayConfirmationModal] =
    useState(false);
  const [deleteMessage, setDeleteMessage] = useState(null);

  //
  const showDeleteModal = (type, id) => {
    setDeleteMessage("Are you sure you want to delete this book?");

    setDisplayConfirmationModal(true);
  };

  // Hide the modal
  const hideConfirmationModal = () => {
    setDisplayConfirmationModal(false);
  };

  // Handle the actual deletion of the item
  const submitDelete = () => {
    setDisplayConfirmationModal(false);
  };

  const handleTitle = (e) => setTitle(e.target.value);
  const handleDescription = (e) => setDescription(e.target.value);
  const handlePublisher = (e) => setPublisher(e.target.value);
  const handleAuthor = (e) => setAuthor(e.target.value);
  const handleLanguages = (e) => setLanguages(e.target.value);
  const handlePages = (e) => setPages(e.target.value);

  const getSingleBook = async () => {
    try {
      const response = await projectService.getSingleBook(id);

      setTitle(response.data.title);
      setDescription(response.data.description);
      setImage(response.data.image);
      setPublisher(response.data.publisher);
      setAuthor(response.data.author);
      setLanguages(response.data.languages);
      setPages(response.data.pages);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteBook = async () => {
    try {
      await projectService.deleteBook(id);
      navigate("/books");
    } catch (errorHandler) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSingleBook();
  }, []);

  const theme = useTheme();
  const [languages, setLanguages] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setLanguages(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const requestData = {
      title,
      description,
      image,
      publisher,
      author,
      languages,
      pages,
    };

    try {
      await projectService.editBook({ id, requestData });

      navigate(`/books`);
    } catch (error) {
      console.log(error);
    }
  };

  //cloudinary
  const handleFileUpload = (e) => {
    const uploadData = new FormData();
    // req.body to .create() method when creating a new movie in '/api/movies' POST route
    uploadData.append("image", e.target.files[0]);
    projectService
      .uploadImage(uploadData)
      .then((response) => {
        // response carries "fileUrl" which we can use to update the state
        setImage(response.fileUrl);
      })
      .catch((err) => console.log("Error while uploading the file: ", err));
  };

  return (
    <>
      <section className="colaboratorsSection">
        {user && (
          <>
            <section className="aboutSection">
              <h1>Editing: {title}</h1>
              {user && (
                <NavLink to="/books">
                  <button className={"editButton"}>Go back</button>
                </NavLink>
              )}
            </section>
            <hr className="separatorAppointments" />
            <section className="editAboutSection">
              <form onSubmit={handleSubmit}>
                <div className="inputAbout">
                  <label htmlFor="title">Title</label>
                  <input
                    className="inputAboutName"
                    type="title"
                    name="title"
                    id="title"
                    value={title}
                    onChange={handleTitle}
                  />
                </div>

                <div className="inputAbout">
                  <label htmlFor="description">Description</label>
                  <textarea
                    name="description"
                    id="description"
                    className="textareaAbout"
                    value={description}
                    onChange={handleDescription}
                  ></textarea>
                </div>

                <div className="inputAbout">
                  <label htmlFor="image">Image Home Page</label>
                  {image && (
                    <img src={image} alt={title} className="photoAboutEdit" />
                  )}
                  <input
                    type="file"
                    image="image"
                    id="image"
                    onChange={(e) => handleFileUpload(e)}
                  />
                </div>

                <div className="inputAbout">
                  <label htmlFor="publisher">Publisher</label>
                  <input
                    className="inputAboutName"
                    type="publisher"
                    name="publisher"
                    id="publisher"
                    value={publisher}
                    onChange={handlePublisher}
                  />
                </div>

                <div className="inputAbout">
                  <label htmlFor="author">Author</label>
                  <input
                    className="inputAboutName"
                    type="author"
                    name="author"
                    id="author"
                    value={author}
                    onChange={handleAuthor}
                  />
                </div>

                <div>
                  <InputLabel id="demo-multiple-name-label">
                    Languages
                  </InputLabel>
                  <Select
                    labelId="demo-multiple-name-label"
                    id="demo-multiple-name"
                    multiple
                    value={languages}
                    onChange={handleChange}
                    input={<OutlinedInput label="Name" />}
                    MenuProps={MenuProps}
                  >
                    {names.map((name) => (
                      <MenuItem
                        key={name}
                        value={name}
                        style={getStyles(name, languages, theme)}
                      >
                        {name}
                      </MenuItem>
                    ))}
                  </Select>
                </div>
                <input
                  type="text"
                  disabled
                  value={languages}
                  className={"disabledInput"}
                />

                <div className="inputAbout">
                  <label htmlFor="pages">Pages</label>
                  <input
                    className="inputAboutName"
                    type="pages"
                    name="pages"
                    id="pages"
                    value={pages}
                    onChange={handlePages}
                  />
                </div>

                <button type="submit" className="editBookButton">
                  Update Book
                </button>
              </form>
              <button
                onClick={() => showDeleteModal()}
                className="editBookButton"
              >
                Delete book
              </button>
              <DeleteConfirmation
                showModal={displayConfirmationModal}
                confirmModal={deleteBook}
                hideModal={hideConfirmationModal}
                message={deleteMessage}
              />
            </section>
          </>
        )}
      </section>
    </>
  );
}

export default EditAbout;
