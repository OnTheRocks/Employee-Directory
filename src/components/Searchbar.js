import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Form, FormControl, Button } from 'react-bootstrap';


export const Searchbar = () => {
  return (
<div className="search" >
 <Navbar bg="light" variant="light">      
      <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-danger">Search</Button>
    </Form>  
  </Navbar>
</div>
)
}