import React, { useState } from 'react';
import Table from "react-bootstrap/Table";
import { prodData } from '../views/CRUD';
import Button from 'react-bootstrap/Button';

function UpdateForm() {

    const [editIdProd, setEditIdProd] = useState('');
    const [editNameProd, setEditNameProd] = useState('');
    const [editDescription, setEditDescription] = useState('');
    const [editCompany, setEditCompany] = useState('');
    const [editPrice, setEditPrice] = useState('');

    const handleUpdate = () => {

    }

    return ( 
        <>
       <Table striped bordered hover>
       <thead>
          <tr>
            <th>#</th>
            <th>Product name</th>
            <th>Description</th>
            <th>Company</th>
            <th>Price</th>
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
                  </tr>
                );
              })
            : "Loading..."}
        </tbody>
        <input type="number" className="form-control" placeholder="Product name" value={editIdProd} onChange={(e) => setEditIdProd(e.target.value)}/>
      
        <input type="text" className="form-control" placeholder="Product name" value={editNameProd} onChange={(e) => setEditNameProd(e.target.value)}/>
       
        <input type="text" className="form-control" placeholder="descripction" value={editDescription} onChange={(e) => setEditDescription(e.target.value)}/>
        
        <input type="text" className="form-control" placeholder="company" value={editCompany} onChange={(e) => setEditCompany(e.target.value)}/>
       
        <input type="number" className="form-control" placeholder="price" value={editPrice} onChange={(e) => setEditPrice(e.target.value)}/>
      
        <button className="btn btn-primary">Update</button>
     
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleUpdate}>
            Save
          </Button>
          </Table>
        </>
     );
}

export default UpdateForm;