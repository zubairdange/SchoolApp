import React from "react";
import { Nav, Dropdown, NavItem, NavLink } from "react-bootstrap";
export const NavCategory = () => {
  return (
    <Nav>
      <Dropdown as={NavItem}>
        <Dropdown.Toggle as={NavLink}>Electronics</Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item>Mobile</Dropdown.Item>
          <Dropdown.Item>Hello here!</Dropdown.Item>
          <Dropdown.Item>Hello where!</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Dropdown as={NavItem}>
        <Dropdown.Toggle as={NavLink}>TV & Appliances</Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item>Hello there!</Dropdown.Item>
          <Dropdown.Item>Hello here!</Dropdown.Item>
          <Dropdown.Item>Hello where!</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Dropdown as={NavItem}>
        <Dropdown.Toggle as={NavLink}>Men</Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item>Hello there!</Dropdown.Item>
          <Dropdown.Item>Hello here!</Dropdown.Item>
          <Dropdown.Item>Hello where!</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Dropdown as={NavItem}>
        <Dropdown.Toggle as={NavLink}>Women</Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item>Hello there!</Dropdown.Item>
          <Dropdown.Item>Hello here!</Dropdown.Item>
          <Dropdown.Item>Hello where!</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Dropdown as={NavItem}>
        <Dropdown.Toggle as={NavLink}>Babys & Kids</Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item>Hello there!</Dropdown.Item>
          <Dropdown.Item>Hello here!</Dropdown.Item>
          <Dropdown.Item>Hello where!</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Dropdown as={NavItem}>
        <Dropdown.Toggle as={NavLink}>Home & Furniture</Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item>Hello there!</Dropdown.Item>
          <Dropdown.Item>Hello here!</Dropdown.Item>
          <Dropdown.Item>Hello where!</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Dropdown as={NavItem}>
        <Dropdown.Toggle as={NavLink}>Sports,Books & More</Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item>Hello there!</Dropdown.Item>
          <Dropdown.Item>Hello here!</Dropdown.Item>
          <Dropdown.Item>Hello where!</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Nav.Link>Flights</Nav.Link>
      <Nav.Link>Offer Zone</Nav.Link>
    </Nav>
  );
};
