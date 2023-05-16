import React, { useState, useEffect } from 'react';
import Spinner from 'react-bootstrap/Spinner';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Card from 'react-bootstrap/Card';
import '../App.css';

import axios from 'axios';


export function Navigationbar() {
  const [data, setData] = useState(null);
  useEffect(() => {
      const fetchData = async () => {
          
      const result = await axios.get('https://expressserverproject8232.onrender.com/itchio/me');
          
      setData(result.data.user);
          
      };
      fetchData();
  }, []);

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        
            <NavDropdown title=
              {
              <Navbar.Brand>
                Phillip Lim
              <img 
              src="https://cdn.discordapp.com/avatars/160947757501120512/3975c8ce6204a289fe090a0ad903ef6c.webp?size=32"
              alt="me"
              style={{paddingLeft:"10px"}}
              />
              </Navbar.Brand>
              } 
              id="basic-nav-dropdown">
              
              <Card style={{ width: '20rem' }}>
                <Card.Body>
                  <Card.Title>AKA - {data ? data.username : <Spinner animation="border" size="sm" />}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">Deviantart - Xell8232</Card.Subtitle>
                  <Card.Text>
                       Can't be the best, but what stops me from trying.
                  </Card.Text>
                  <Card.Link href={data ? data.url : null}>ITCHIO PAGE</Card.Link>
                  <Card.Link href="https://github.com/phillip8232">GITHUB PAGE</Card.Link>
                </Card.Body>
              </Card>
              
            </NavDropdown>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
