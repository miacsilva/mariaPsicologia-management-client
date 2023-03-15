import React, { useState, useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";

import { AuthContext } from "../context/auth.context";
import projectService from "../services/project.service";

function CreateBook() {
  const { user, logout } = useContext(AuthContext);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [publisher, setPublisher] = useState("");
  const [publishedDate, setPublishedDate] = useState("");
  const [author, setAuthor] = useState("");
  const [languages, setLanguages] = useState("");
  const [pages, setPages] = useState("");

  const handleTitle = (e) => setTitle(e.target.value);
  const handleDescription = (e) => setDescription(e.target.value);
  const handlePublisher = (e) => setPublisher(e.target.value);
  const handlePublishedDate = (e) => setPublishedDate(e.target.value);
  const handleAuthor = (e) => setAuthor(e.target.value);
  const handleLanguages = (e) => setLanguages(e.target.value);
  const handlePages = (e) => setPages(e.target.value);

  const navigate = useNavigate();

  const handleFileUpload = (e) => {
    const uploadData = new FormData();
    uploadData.append("image", e.target.files[0]);
    projectService
      .uploadImage(uploadData)
      .then((response) => {
        // response carries "fileUrl" which we can use to update the state
        setImage(response.fileUrl);
      })
      .catch((err) => console.log("Error while uploading the file: ", err));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const requestData = {
      title,
      description,
      image,
      publisher,
      publishedDate,
      author,
      languages,
      pages,
    };

    try {
      projectService.createBook({ requestData });
      navigate(`/books`);
    } catch (error) {
      console.log(error);
    }
  };

  /* const handleSubmit = (e) => {
    e.preventDefault();
    projectService
      .createBook({
        title,
        description,
        image,
        publisher,
        publishedDate,
        author,
        languages,
        pages,
      })
      .then((res) => {
        setTitle("");
        setDescription("");
        setImage("");
        setPublisher("");
        setPublishedDate("");
        setAuthor("");
        setLanguages("");
        setPages("");

        // navigate to another page
        navigate("/books");
      })
      .catch((err) => console.log("Error while adding the new therapy: ", err));
  }; */

  return (
    <>
      <section className="booksSection">
        <h1>Adding new book...</h1>
        {user && (
          <NavLink to="/books">
            <button className={"editButton"}>Go back</button>
          </NavLink>
        )}
      </section>
      <section className="createColaborator">
        <h1>New book form</h1>

        <form onSubmit={handleSubmit} className={"createColaboratorForm"}>
          <div>
            <input
              type="file"
              name="image"
              onChange={(e) => handleFileUpload(e)}
            />
            <img src={image} alt="" className="photoAboutEdit" />
          </div>
          <div className="createColaborator__name">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              name="title"
              value={title}
              onChange={handleTitle}
              /*onChange={(e) => setTitle(e.target.value)}*/
            />
          </div>

          <div className="createColaborator__email">
            <label htmlFor="description">Description</label>
            <input
              type="text"
              name="description"
              value={description}
              onChange={handleDescription}
              /*onChange={(e) => setDescription(e.target.value)}*/
            />
          </div>

          <div className="createColaborator__password">
            <label htmlFor="publisher">Publisher</label>
            <input
              type="text"
              name="publisher"
              value={publisher}
              onChange={handlePublisher}
              /*onChange={(e) => setPublisher(e.target.value)}*/
            />
          </div>

          <div className="createColaborator__password">
            <label htmlFor="publishedDate">Published Date</label>
            <input
              type="text"
              name="publishedDate"
              value={publishedDate}
              onChange={handlePublishedDate}
              /*onChange={(e) => setPublishedDate(e.target.value)}*/
            />
          </div>

          <div className="createColaborator__password">
            <label htmlFor="author">Author</label>
            <input
              type="text"
              name="author"
              value={author}
              onChange={handleAuthor}
              /*onChange={(e) => setAuthor(e.target.value)}*/
            />
          </div>

          <div className="createColaborator__password">
            <label htmlFor="languages">Languages</label>
            <input
              type="text"
              name="languages"
              value={languages}
              onChange={handleLanguages}
              /*onChange={(e) => setLanguages(e.target.value)}*/
            />
          </div>

          <div className="createColaborator__password">
            <label htmlFor="pages">Pages</label>
            <input
              type="number"
              name="pages"
              value={pages}
              onChange={handlePages}
              /*onChange={(e) => setPages(e.target.value)}*/
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

export default CreateBook;
