import React, { useState, useEffect } from "react";
import axios from "axios";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import projectService from "../services/project.service";
import DeleteConfirmation from "../components/DeleteConfirmation";
import { Row, Col, Container, Card, Table, Alert } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function EditMonthlySubject() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState([]);
  const [month, setMonth] = useState("");

  //

  const handleTitle = (e) => setTitle(e.target.value);
  const handleDescription = (e) => setDescription(e.target.value);
  const handleMonth = (e) => setMonth(e.target.value);

  const navigate = useNavigate();

  const { id } = useParams();

  const getMonthlySubject = async () => {
    try {
      const response = await projectService.getMonthlySubject();

      setTitle(response.data.title);
      setDescription(response.data.description);
      setImage(response.data.image);
      setMonth(response.data.month);
    } catch (errorHandler) {
      console.log(error);
    }
  };

  const deleteMonth = async () => {
    try {
      await projectService.deleteMonthlySubject(id);
      navigate("/monthly-subjects");
    } catch (errorHandler) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTherapy();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const requestData = { title, description, image, month };
    try {
      await projectService.editMonthlySubject({ id, requestData });
      navigate(`/monthly-subject`);
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
    <section>
      <h1>Edit Monthly Subject:</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Subject of the Month:</label>
        <input
          type="text"
          name="title"
          id="title"
          value={title}
          onChange={handleTitle}
        />

        <label htmlFor="description">Description</label>
        <textarea
          name="description"
          id="description"
          className="textareaAbout"
          value={description}
          onChange={handleDescription}
        ></textarea>


        {image && <img src={image} alt={title} />}
        <input
          type="file"
          image="image"
          id="image"
          onChange={(e) => handleFileUpload(e)}
        />
        
<FormControl fullWidth> 
  <InputLabel id="demo-simple-select-label">Date</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={month}
    label="month"
    onChange={(e) => setMonth(e.target.value)}
  >
    <MenuItem value={10}>Abril/2023</MenuItem>
    <MenuItem value={20}>Maio/2023</MenuItem>
    <MenuItem value={30}>Junho/2023</MenuItem>
    <MenuItem value={10}>Julho/2023</MenuItem>
    <MenuItem value={20}>Agosto/2023</MenuItem>
    <MenuItem value={30}>Setembro/2023</MenuItem>
    <MenuItem value={10}>Outubro/2023</MenuItem>
    <MenuItem value={20}>Novembro/2023</MenuItem>
    <MenuItem value={30}>Dezembro/2023</MenuItem>
  </Select>
</FormControl>

        <button type="submit">Save Changes</button>
      </form>

    
    </section>
  );
}

export default EditMonthlySubject;
