import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { Link } from "react-router-dom";

const Home = () => {
  let nameData = localStorage.getItem("Name");
  let phoneData = localStorage.getItem("Phone");

  const [show, setShow] = useState(false);

  const handleDelete = (event) => {
    localStorage.removeItem("Name");
    localStorage.removeItem("Phone");
    setShow(false);
  };

  return (
    <div>
      {nameData && phoneData ? (
        <table>
          <tr>
            <th>Name</th>
            <th>Phone</th>
            <th>Type</th>
            <th>Action</th>
          </tr>
          <tr>
            <td>{nameData}</td>
            <td>{phoneData}</td>
            <td>hdbas</td>
            <td>
              <button onClick={() => setShow(true)}>Delete</button>
              <button>EDIT</button>
            </td>
          </tr>
        </table>
      ) : (
        <div>
          <p>No Contacts</p>
          <Link to="/addContact">ADD</Link>
        </div>
      )}
      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header>
          <Modal.Title>DELETE MODAL</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>ARE YOU SHARE YOU WANT TO DELETE THIS CONTACT</p>
        </Modal.Body>
        <Modal.Footer>
          <button onClick={() => setShow(false)}>CANCEL</button>
          <button onClick={handleDelete}>DELETE</button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Home;
