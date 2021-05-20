import React, { useState } from 'react';
import './css/Logs.css';
import * as ReactBootStrap from 'react-bootstrap';

function LogsCard(props){
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
        <>
        <div className="card" onClick={handleShow}>
            <h2>{props.title}</h2>
            <h5>{props.releaseData}</h5>
        </div>

        <ReactBootStrap.Modal show={show} onHide={handleClose}>
        <ReactBootStrap.Modal.Header closeButton>
          <ReactBootStrap.Modal.Title>{props.title} Patch Notes</ReactBootStrap.Modal.Title>
        </ReactBootStrap.Modal.Header>
        <ReactBootStrap.Modal.Body>{props.featuresAdded}</ReactBootStrap.Modal.Body>
        <ReactBootStrap.Modal.Footer>
          <ReactBootStrap.Button variant="secondary" onClick={handleClose}>
            Close
          </ReactBootStrap.Button>
        </ReactBootStrap.Modal.Footer>
      </ReactBootStrap.Modal>
      </>
    )
}

export default LogsCard