import React, { useState, useEffect, useContext } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import DeleteConfirmation from "../components/DeleteConfirmation";
import axios from "axios";

//COMPONENTS
import projectService from "../services/project.service";

function ViewColaborators() {
  const { user, logout } = useContext(AuthContext);
  const [users, setUsers] = useState([]);
  const [userToDelete, setuserToDelete] = useState(null);

  const { id } = useParams();
  const navigate = useNavigate();

  //
  const [displayConfirmationModal, setDisplayConfirmationModal] =
    useState(false);
  const [deleteMessage, setDeleteMessage] = useState(null);

  //
  const showDeleteModal = (id) => {
    setDeleteMessage(`Tem a certeza que quer eliminar este colaborador?`);
    setuserToDelete(id);
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

  const getUser = async () => {
    try {
      const response = await projectService.getUser();
      /* console.log(response.data); */
      setUsers(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteUser = async () => {
    try {
      await projectService.deleteUser(userToDelete);
      /* navigate("/colaborators"); */
      getUser();
      hideConfirmationModal();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUser();
  }, []);
  return (
    <>
      <section className="colaboratorsSection">
        {user && user.admin && (
          <>
            <section className="booksSection">
              <h1>Ver Colaboradores</h1>
              {user && (
                <NavLink to="/createColaborator">
                  <button className={"editButton"}>Adicionar colaborador</button>
                </NavLink>
              )}
            </section>
            <hr className="separatorAppointments" />
            {users.map((colaborators, i) => {
              return (
                <div className={"colaboratorsTabsColor"} key={colaborators._id}>
                  {i !== 0 && (
                    <>
                      <section className={"colaboratorsTabs"}>
                        <div>
                          <h1>{colaborators.name}</h1>
                          <h4>{colaborators.email}</h4>
                        </div>
                        <div className={"colaboratorsTabs__buttons"}>
                          <button
                            className={"colaboratorDeleteButton"}
                            type="submit"
                            onClick={() => showDeleteModal(colaborators._id)}
                          >
                            Apagar colaborador
                          </button>
                          <DeleteConfirmation
                            showModal={displayConfirmationModal}
                            confirmModal={deleteUser}
                            hideModal={hideConfirmationModal}
                            message={deleteMessage}
                          />
                        </div>
                      </section>
                      <hr className="colaboratorSeparator" />
                    </>
                  )}
                </div>
              );
            })}
          </>
        )}
      </section>
    </>
  );
}

export default ViewColaborators;
