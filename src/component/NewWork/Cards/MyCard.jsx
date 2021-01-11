import React from "react";
import { Card, Col, Button } from "react-bootstrap";
export const MyCard = ({ cdata }) => {
  console.log("current data=====>", cdata);
  return (
    <div>
      <Col>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" height="200" width="200" src={cdata.Image} />
          <Card.Body>
            <Card.Title>{cdata.Title}</Card.Title>
            <Card.Text>{cdata.Text}</Card.Text>
            <Card.Link>{cdata.Link}</Card.Link>
            <Button>Click me</Button>
          </Card.Body>
        </Card>
      </Col>

      {/* <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="Images/rose.jpg" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="Images/rose.jpg" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="Images/rose.jpg" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Card.Link> zbc@gmail.com</Card.Link>
          </Card.Body>
        </Card>*/}
    </div>
  );
};
