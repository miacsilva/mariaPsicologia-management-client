import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { NavLink, useNavigate, useParams } from "react-router-dom";

import { AuthContext } from "../context/auth.context";
import projectService from "../services/project.service";
import DeleteConfirmation from "../components/DeleteConfirmation";
import { Row, Col, Container, Card, Table, Alert } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function EditTherapy() {
  const { user } = useContext(AuthContext);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState([]);

  const handleTitle = (e) => setTitle(e.target.value);
  const handleDescription = (e) => setDescription(e.target.value);

  const navigate = useNavigate();

  const { id } = useParams();

  //
  const [displayConfirmationModal, setDisplayConfirmationModal] =
    useState(false);
  const [deleteMessage, setDeleteMessage] = useState(null);

  //
  const showDeleteModal = (type, id) => {
    setDeleteMessage("Are you sure you want to delete this therapy?");

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

  const getTherapy = async () => {
    try {
      const response = await projectService.getTherapies();

      setTitle(response.data.title);
      setDescription(response.data.description);
      setImage(response.data.image);
    } catch (errorHandler) {
      console.log(error);
    }
  };

  const deleteTherapy = async () => {
    try {
      await projectService.deleteTherapy(id);
      navigate("/therapies");
    } catch (errorHandler) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTherapy();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const requestData = { title, description, image };
    try {
      await projectService.editTherapy({ id, requestData });
      navigate(`/therapies`);
    } catch (errorHandler) {
      console.log(error);
    }
  };

  //cloudinary
  const handleFileUpload = (e) => {
    const uploadData = new FormData();

    uploadData.append("image", e.target.files[0]);
    projectService
      .uploadImage(uploadData)
      .then((response) => {
        setImage(response.fileUrl);
      })
      .catch((errorHandler) =>
        console.log("Error while uploading the file: ", err)
      );
  };

  return (
    <>
      <section className="appointmentSection">
        <h1>Edit therapy...</h1>
        {user && (
          <NavLink to="/appointments">
            <button className={"editApButton"}>Go back</button>
          </NavLink>
        )}
      </section>
      <hr className="separatorAppointments" />
      <section className="editTherapySection">
        <form onSubmit={handleSubmit} className="editTherapyForm">
          <div className="inputTherapy">
            <label htmlFor="title">Therapie's Name</label>
            <input
              type="text"
              name="title"
              id="title"
              value={title}
              onChange={handleTitle}
            />
          </div>

          <div className="inputTherapy">
            <label htmlFor="description">Description</label>
            <textarea
              name="description"
              id="description"
              className="textareaAbout"
              value={description}
              onChange={handleDescription}
            ></textarea>
          </div>

          <div className="inputTherapy">
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

          <button type="submit" className={"editTherapyButton"}>
            Save Changes
          </button>
        </form>

        <button
          onClick={() => showDeleteModal()}
          className={"editTherapyButton"}
        >
          Delete
        </button>
        <DeleteConfirmation
          showModal={displayConfirmationModal}
          confirmModal={deleteTherapy}
          hideModal={hideConfirmationModal}
          message={deleteMessage}
        />
      </section>
    </>
  );
}

export default EditTherapy;
