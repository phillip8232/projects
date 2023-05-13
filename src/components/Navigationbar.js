import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Card from 'react-bootstrap/Card';



export function Navigationbar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title=
              {
              <Navbar.Brand href="#home">
                Phillip Lim
              <img 
              src="https://cdn.discordapp.com/avatars/160947757501120512/3975c8ce6204a289fe090a0ad903ef6c.webp?size=32"
              alt="me"
              style={{paddingLeft:"10px"}}
              />
              </Navbar.Brand>
              } 
              id="basic-nav-dropdown">
              <NavDropdown.Item>
                <Card style={{ width: '18rem' }}>
                  <Card.Body>
                    <Card.Title>Developer Name - GOES HERE</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">DISCORD NAME GOES HERE</Card.Subtitle>
                    <Card.Text>
                      DESCRIPTION OF WHAT I DO GOES HERE
                    </Card.Text>
                    <Card.Link href="https://alythea.itch.io/">ITCH.IO PAGE</Card.Link>
                    <Card.Link href="https://github.com/phillip8232">GITHUB PAGE</Card.Link>
                  </Card.Body>
                </Card>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
