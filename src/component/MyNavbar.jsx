import React, { Ul, Li } from "react";
import {
  Col,
  Navbar,
  Nav,
  NavLink,
  NavDropdown,
  Dropdown,
  NavItem,
} from "react-bootstrap";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";
export const MyNavbar = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">My Practice</Navbar.Brand>

        <Nav>
          <Nav.Link href="">Home</Nav.Link>
          <Nav.Link href="#features">charts</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
          <Nav.Link href="#home">health</Nav.Link>
          <Nav.Link href="#features">Footware</Nav.Link>
          <Nav.Link href="#pricing">cloths</Nav.Link>
          <NavDropdown title="CURTAINS" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
          <Dropdown as={NavItem}>
            <Dropdown.Toggle as={NavLink}>Click to see more…</Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item>Hello there!</Dropdown.Item>
              <Dropdown.Item>Hello here!</Dropdown.Item>
              <Dropdown.Item>Hello where!</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          ;
        </Nav>
      </Navbar>
    </div>
  );
};
