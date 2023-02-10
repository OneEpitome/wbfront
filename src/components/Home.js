import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";

function Home() {
  const [show, setShow] = useState(false);
  const [user, setUser] = useState("");

  useEffect(async () => {
    setUser(await (await fetch("/api/username")).text());
  }, []);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Link to="/seat/1">
            {" "}
            <Button variant="info">Seat 1</Button>{" "}
          </Link>
          <Link to="/seat/2">
            {" "}
            <Button variant="info">Seat 2</Button>{" "}
          </Link>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      <h1>로그인한 유저 : {user}</h1>
    </>
  );
}

export default Home;
