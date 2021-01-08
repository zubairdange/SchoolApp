import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
export const Rendering = () => {
  const [show, setShow] = useState(true);
  return (
    <div>
      {show && (
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
      )}
      <Button variant="primary" onClick={() => setShow(!show)}>
        Go somewhere
      </Button>
    </div>
  );
};
