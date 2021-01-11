import React from "react";
import { Row, Col } from "react-bootstrap";
import { Mycarousel } from "../myCarousel/Mycarousel";
import { NavCategory } from "../Navbar/NavCategory";
import { CardParent } from "./Cards/CardParent";
import { MyCard } from "./Cards/MyCard";

export const NewWork = () => {
  return (
    <div>
      <NavCategory />
      <Mycarousel />
      <br></br>
      <CardParent />
    </div>
  );
};
