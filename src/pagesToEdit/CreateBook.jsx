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
      projectService.createBook(requestData);
      navigate(`/books`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <section className="booksSection">
        <h1>Adicionar novo livro</h1>
        {user && (
          <NavLink to="/books">
            <button className={"editButton"}>Voltar</button>
          </NavLink>
        )}
      </section>
      <hr className="separatorAppointments" />
      <section className="createColaborator">
        <h1>Novo Livro</h1>

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
            <label htmlFor="title">Título</label>;
            <input
              type="text"
              name="title"
              value={title}
              onChange={handleTitle}
            />
          </div>

          <div className="createColaborator__email">
            <label htmlFor="description">Descrição</label>
            <input
              type="text"
              name="description"
              value={description}
              onChange={handleDescription}
            />
          </div>

          <div className="createColaborator__password">
            <label htmlFor="publisher">Editora</label>
            <input
              type="text"
              name="publisher"
              value={publisher}
              onChange={handlePublisher}
            />
          </div>

          <div className="createColaborator__password">
            <label htmlFor="publishedDate">Data de publicação</label>
            <input
              type="text"
              name="publishedDate"
              value={publishedDate}
              onChange={handlePublishedDate}
            />
          </div>

          <div className="createColaborator__password">
            <label htmlFor="author">Autor</label>
            <input
              type="text"
              name="author"
              value={author}
              onChange={handleAuthor}
            />
          </div>

          <div className="createColaborator__password">
            <label htmlFor="languages">Idiomas</label>
            <input
              type="text"
              name="languages"
              value={languages}
              onChange={handleLanguages}
            />
          </div>

          <div className="createColaborator__password">
            <label htmlFor="pages">Páginas</label>
            <input
              type="number"
              name="pages"
              value={pages}
              onChange={handlePages}
            />
          </div>

          <button type="submit" className="buttonCreate">
            Adicionar Livro
          </button>
        </form>
      </section>
    </>
  );
}

export default CreateBook;
