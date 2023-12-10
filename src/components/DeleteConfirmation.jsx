import React from 'react'
import { Modal, Button } from "react-bootstrap";
 
const DeleteConfirmation = ({ showModal, hideModal, confirmModal, id, type, message }) => {
    return (
        <Modal show={showModal} onHide={hideModal}>
        <Modal.Header closeButton>
          <Modal.Title>Tem a certeza que quer eliminar?</Modal.Title>
        </Modal.Header>
        <Modal.Body><div className="alert alert-danger">{message}</div></Modal.Body>
        <Modal.Footer>
          <Button variant="default" onClick={hideModal}>
            Cancelar
          </Button>
          <Button variant="danger" onClick={() => confirmModal(type, id) }>
            Apagar
          </Button>
        </Modal.Footer>
      </Modal>
    )
}
 
export default DeleteConfirmation;