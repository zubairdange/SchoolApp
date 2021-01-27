import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import { Mycarousel } from "../myCarousel/Mycarousel";
import { NavCategory } from "../Navbar/NavCategory";
import { CardParent } from "./Cards/CardParent";
import { MyCard } from "./Cards/MyCard";

export const NewWork = () => {
  return (
    <div>
      <NavCategory />
      <Mycarousel />

      <lable>Deals Of The Day</lable>
      <Button>View All</Button>
      <CardParent />
    </div>
  );
};
