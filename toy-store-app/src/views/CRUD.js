import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from "react-bootstrap/Container";

const CRUD = () => {

    const [show, setShow] = useState(false);
    const [showDiv, setShowDiv] = useState(false);
    const [showCheckbox, setShowCheckbox] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    const [nameProd, setNameProd] = useState('');
    const [description, setDescription] = useState('');
    const [company, setCompany] = useState('');
    const [price, setPrice] = useState('');

   


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

 

  return (
    <>   
     <h1>Product List </h1>
       <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                <Button variant="primary" onClick={() => setShowDiv(!showDiv)}>New</Button>
                <Button variant="warning" >Edit</Button>
                <Button variant="danger" onClick={() => setShowCheckbox(!showCheckbox)}>Delete</Button>
            </div>  
            { showDiv && <Container>
    <Row>
        <Col>
        <input type="text" className="form-control" placeholder="Product name" value={nameProd} onChange={(e) => setNameProd(e.target.value)}/>
        </Col>
        <Col>
        <input type="text" className="form-control" placeholder="descripction" value={description} onChange={(e) => setDescription(e.target.value)}/>
        </Col>
        <Col>
        <input type="text" className="form-control" placeholder="company" value={company} onChange={(e) => setCompany(e.target.value)}/>
        </Col>
        <Col>
        <input type="number" className="form-control" placeholder="price" value={price} onChange={(e) => setPrice(e.target.value)}/>
        </Col>
        <Col>
        <button className="btn btn-primary">Submit</button>
        </Col>
      </Row>
    </Container>
            }
    
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
                    <td colSpan={1}>
                        <button className="btn btn-primary" onClick={() => handleEdit(item.idProd)}>Edit</button> &nbsp;
                    </td>
                    { showCheckbox && <td colSpan={1}> <input type="checkbox" value={item.idProd} onClick={() => handleDelete(item.idProd)}></input></td> }
                  </tr>
                );
              })
            : "Loading..."}
        </tbody>
      </Table>
      
    </>
  );
};

export default CRUD;
