import React from "react";
import {
  Navbar,
  Nav,
  NavLink,
  NavDropdown,
  Dropdown,
  NavItem,
  Button,
  Form,
  FormControl,
} from "react-bootstrap";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Chart } from "./Charts/Chart";
import { Home } from "./Home/Home";
export const MyNavbar = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">My Practice</Navbar.Brand>

        <Nav>
          <Nav.Link href="/Home">Home</Nav.Link>
          <Nav.Link href="/Chart">Charts</Nav.Link>
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
            <Dropdown.Toggle as={NavLink}>Click</Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item>Hello there!</Dropdown.Item>
              <Dropdown.Item>Hello here!</Dropdown.Item>
              <Dropdown.Item>Hello where!</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Nav>
      </Navbar>
      <Router>
        <Switch>
          <Route path="/Chart">
            <Chart />
          </Route>
          <Route path="/Home">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};
