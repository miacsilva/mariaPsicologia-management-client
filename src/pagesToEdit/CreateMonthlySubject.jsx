import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import the service file since we need it to send/get the data to/from the server
import projectService from "../services/project.service";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function CreateMonthlySubject() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [month, setMonth] = useState("");

  const navigate = useNavigate();

  // ******** this method handles the file upload ********

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

  // ********  this method submits the form ********
  const handleSubmit = (e) => {
    e.preventDefault();
    projectService
      .createMonthlySubject({ title, description, image, month })
      .then((res) => {
        // Reset the form
        setTitle("");
        setDescription("");
        setImage("");
        setMonth("")
        // navigate to another page
        navigate("/monthlySubjects");
      })
      .catch((err) => console.log("Error while adding the new monthly subject: ", err));
  };
  return (
    <div>
      <h2>Create new Monthly Subject</h2>
      <form onSubmit={handleSubmit}>
        <label>Subject of the Month</label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Description</label>
        <textarea
          type="text"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input type="file" name="image" onChange={(e) => handleFileUpload(e)} />
        <button type="submit">Add new Monthly Subject</button>
       

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
      </form>
    </div>
  );
}
export default CreateMonthlySubject;
