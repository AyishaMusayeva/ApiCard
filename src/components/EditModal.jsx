import React,{useState} from "react";
import { EditUser } from "../Api/requests";
import { Modal, Form, Button } from "react-bootstrap";
import { useGlobalContext } from "../contetx/GlobalContext";

const EditModal = () => {
  const { openModal, closeModal, editedItem } = useGlobalContext();
  const [editedUser, setEditedUser] = useState(editedItem);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEditedUser({
      ...editedUser,
      [name]: value,
    });
  };
const updateUser = async () => {
    await EditUser(editedUser.id , editedUser)
    setTimeout(() => {
        closeModal()
    },1500)
}

  return (
    <>
      <div>
        <Modal show={openModal} onHide={closeModal}>
          <Modal.Header closeButton>
            <Modal.Title>Edit User</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group>
                <Form.Label>Full Name</Form.Label>
                <Form.Control
                  type="text"
                  name="fullName"
                  value={editedUser.fullName}
                  onChange={handleInputChange}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={editedUser.email}
                  onChange={handleInputChange}
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Position</Form.Label>
                <Form.Control
                  type="text"
                  name="position"
                  value={editedUser.position}
                  onChange={handleInputChange}
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Age</Form.Label>
                <Form.Control
                  type="number"
                  name="age"
                  value={editedUser.age}
                  onChange={handleInputChange}
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer className="d-flex justify-content-center align-items-center">
            <Button
              variant="primary"
              className="py-2 px-5"
              onClick={updateUser}
            >
              Edit
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
};

export default EditModal;
