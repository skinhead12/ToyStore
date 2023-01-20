import React, { useState, useEffect } from "react";
import Container from 'react-bootstrap/Container';
import Table from "react-bootstrap/Table";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const CRUD = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  

  const prodData = [
    {
      idProd: 1,
      nameProd: "carrito remoto",
      description: "carrito de control remoto",
      minAge: 9,
      company: "mattel",
      price: 400,
    },
    {
      idProd: 2,
      nameProd: "avalancha",
      description: "hecha de madera, inluye freno",
      minAge: 13,
      company: "apache",
      price: 1000,
    },
  ];

  const [data, setData] = useState([]);

  useEffect(() => {
    setData(prodData);
  }, []);

  const handleEdit = (id) => {
    //alert(id);
    handleShow();
  }

  const handleDelete = (id) => {
    if (window.confirm('Are you sure to delte this product?') == true)
    alert(id);
  }

  const handleUpdate = () => {

  }

  return (
    <>
    <h1>Product List </h1>
       <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                <Button variant="primary" >New</Button>
                <Button variant="warning" >Edit</Button>
                <Button variant="danger" >Delete</Button> 
            </div>     
       <Container>
      <Row>
        <Col>
        <input type="text" className="form-control" placeholder="Product name"/>
        </Col>
        <Col>
        <input type="text" className="form-control" placeholder=""/>
        </Col>
        <Col>3 of 3</Col>
      </Row>
    </Container>
    <br></br>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Product name</th>
            <th>Description</th>
            <th>Company</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data && data.length > 0
            ? data.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.nameProd}</td>
                    <td>{item.description}</td>
                    <td>{item.company}</td>
                    <td>{item.price}</td>
                    <td colSpan={2}>
                        <button className="btn btn-primary" onClick={() => handleEdit(item.idProd)}>Edit</button> &nbsp;
                        <button className="btn btn-danger" onClick={() => handleDelete(item.idProd)}>Delete</button>
                    </td>

                  </tr>
                );
              })
            : "Loading..."}
        </tbody>
      </Table>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Update Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleUpdate}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default CRUD;
