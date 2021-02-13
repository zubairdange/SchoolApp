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
import { NewWork } from "./NewWork/NewWork";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { LoginForm } from "../component/LoginForm/LoginForm";
import { NewAccount } from "../component/LoginForm/NewAccount";
import { AdmissinForm1 } from "./AdmissinForm1";
import { AdmissinForm2 } from "./AdmissinForm2";
import { AdmissinForm3 } from "./AdmissinForm3";
import { AdmissinForm4 } from "./AdmissinForm4";
export const MyNavbar = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">My Practice</Navbar.Brand>

        <Nav>
          <Nav.Link href="/Home">Home</Nav.Link>
          <Nav.Link href="/Chart">Charts</Nav.Link>
          <Nav.Link href="/NewWork">NewWork</Nav.Link>
          <Nav.Link href="#home">health</Nav.Link>
          <Nav.Link href="/AdmissinForm">AdmissinForm</Nav.Link>
          {/* <Nav.Link href="/AdmissinForm2">AdmissinForm2</Nav.Link> */}
          {/* <NavDropdown title="CURTAINS" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown> */}

          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />

            <SearchIcon color="secondary" />
          </Form>
          <Nav.Link href="/LoginForm">Login</Nav.Link>
          <Dropdown as={NavItem}>
            <Dropdown.Toggle as={NavLink}>More</Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item>Hello there!</Dropdown.Item>
              <Dropdown.Item>Hello here!</Dropdown.Item>
              <Dropdown.Item>Hello where!</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Nav.Link href="#">
            {<ShoppingCartIcon color="secondary" />}Cart
          </Nav.Link>
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
          <Route path="/NewWork">
            <NewWork />
          </Route>
          <Route path="/AdmissinForm">
            <AdmissinForm1 />
          </Route>
          <Route path="/AdmissinForm2">
            <AdmissinForm2 />
          </Route>
          <Route path="/AdmissinForm1">
            <AdmissinForm1 />
          </Route>
          <Route path="/AdmissinForm3">
            <AdmissinForm3 />
          </Route>
          <Route path="/AdmissinForm4">
            <AdmissinForm4 />
          </Route>
          {/* <Route path="/LoginForm">
            <LoginForm />
          </Route>
          <Route path="/NewAccount">
            <NewAccount />
          </Route> */}
        </Switch>
      </Router>
    </div>
  );
};
