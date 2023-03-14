import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import the service file since we need it to send/get the data to/from the server
import projectService from "../services/project.service";

function AddTherapies() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
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
      .createTherapy({ title, description, image })
      .then((res) => {
        // Reset the form
        setTitle("");
        setDescription("");
        setImage("");
        // navigate to another page
        navigate("/");
      })
      .catch((err) => console.log("Error while adding the new therapy: ", err));
  };
  return (
    <div>
      <h2>Add Therapies</h2>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
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
        <button type="submit">Save new therapy</button>
      </form>
    </div>
  );
}
export default AddTherapies;
