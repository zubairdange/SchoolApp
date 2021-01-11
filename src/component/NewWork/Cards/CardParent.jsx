import React from "react";
import { Row } from "react-bootstrap";
import { CardReducer } from "../State/Reducer/CardReducer";
import { MyCard } from "../Cards/MyCard";

export const CardParent = () => {
  return (
    <React.Fragment>
      <Row>
        {CardReducer.cardData.map((data) => {
          return <MyCard cdata={data} />;
        })}
      </Row>
    </React.Fragment>
  );
};
