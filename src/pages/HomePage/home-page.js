import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./home-page.scss";

const Home = () => {
  let nameData = localStorage.getItem("Name");
  let phoneData = localStorage.getItem("Phone");
  let typeData = localStorage.getItem("SELECT_VALUE_KEY");

  const [show, setShow] = useState(false);

  const handleDelete = (event) => {
    localStorage.removeItem("Name");
    localStorage.removeItem("Phone");
    setShow(false);
  };

  return (
    <div>
      {nameData && phoneData ? (
        <table className="table-container">
          <tr className="row-content">
            <th>Name</th>
            <th>Phone</th>
            <th>Type</th>
            <th>Action</th>
          </tr>
          <tr>
            <td>{nameData}</td>
            <td>{phoneData}</td>
            <td>{typeData}</td>
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
      <Modal show={show} onHide={() => setShow(false)} className="center-modal">
        <Modal.Header>
          <Modal.Title>
            <h2> DELETE MODAL</h2>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>ARE YOU SHARE YOU WANT TO DELETE THIS CONTACT</p>
        </Modal.Body>
        <Modal.Footer>
          <button className="add-button" onClick={() => setShow(false)}>
            CANCEL
          </button>
          <button onClick={handleDelete}>DELETE</button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Home;
