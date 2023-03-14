import React, { useState, useEffect, useContext } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

//COMPONENTS
import { AuthContext } from "../context/auth.context";
import projectService from "../services/project.service";

function EditAbout() {
  const { user, logout } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState();
  const [facebook, setFacebook] = useState("");
  const [instagram, setInstagram] = useState("");

  const { id } = useParams();
  const navigate = useNavigate();

  const handleEmail = (e) => setEmail(e.target.value);
  const handleAddress = (e) => setAddress(e.target.value);
  const handlePhoneNumber = (e) => setPhoneNumber(e.target.value);
  const handleFacebook = (e) => setFacebook(e.target.value);
  const handleInstagram = (e) => setInstagram(e.target.value);

  const getContacts = async () => {
    try {
      const response = await projectService.getContacts();

      setEmail(response.data[0].email);
      setAddress(response.data[0].address);
      setPhoneNumber(response.data[0].phoneNumber);
      setFacebook(response.data[0].facebook);
      setInstagram(response.data[0].instagram);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getContacts();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const requestData = { email, phoneNumber, address, instagram, facebook };

    try {
      await projectService.editContacts({ id, requestData });

      navigate(`/contacts`);
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
              <h1>Editing About...</h1>
              {user && (
                <NavLink to="/contacts">
                  <button className={"editButton"}>Go back</button>
                </NavLink>
              )}
            </section>
            <section className="editAboutSection">
              <form onSubmit={handleSubmit}>
                <div className="inputAbout">
                  <label htmlFor="email">Email</label>
                  <input
                    className="inputAboutName"
                    type="email"
                    name="email"
                    id="email"
                    value={email}
                    onChange={handleEmail}
                  />
                </div>

                <div className="inputAbout">
                  <label htmlFor="address">Address</label>
                  <input
                    className="inputAboutName"
                    type="address"
                    name="address"
                    id="address"
                    value={address}
                    onChange={handleAddress}
                  />
                </div>

                <div className="inputAbout">
                  <label htmlFor="phoneNumber">Phone Number</label>
                  <input
                    className="inputAboutName"
                    type="phoneNumber"
                    name="phoneNumber"
                    id="phoneNumber"
                    value={phoneNumber}
                    onChange={handlePhoneNumber}
                  />
                </div>

                <div className="inputAbout">
                  <label htmlFor="facebook">Facebook</label>
                  <input
                    className="inputAboutName"
                    type="facebook"
                    name="facebook"
                    id="facebook"
                    value={facebook}
                    onChange={handleFacebook}
                  />
                </div>

                <div className="inputAbout">
                  <label htmlFor="instagram">Instagram</label>
                  <input
                    className="inputAboutName"
                    type="instagram"
                    name="instagram"
                    id="instagram"
                    value={instagram}
                    onChange={handleInstagram}
                  />
                </div>

                <button type="submit">Edit Section</button>
              </form>
            </section>
          </>
        )}
      </section>
    </>
  );
}

export default EditAbout;
