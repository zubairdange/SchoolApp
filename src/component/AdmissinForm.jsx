import { Label } from "@material-ui/icons";
import React from "react";
import { Form, Col, Button, Row, Dropdown } from "react-bootstrap";

export const AdmissinForm = () => {
  return (
    <div>
      <lable>
        Download Student Admission Form<Button>Download</Button>
      </lable>
      <iframe
        src="StudentAdmissionForm.pdf"
        title="Download Student Admission Form"
      ></iframe>

      <Form>
        <Form.Group>
          <h2 style={{ marginLeft: "500px" }}>For Office Use Only</h2>
          <h2 style={{ marginLeft: "500px" }}>
            For Payment Detais (details of DD/Pay order)
          </h2>

          <Form.Row>
            <Form.Label column="sm" lg={1}>
              1.DD.NO.
            </Form.Label>
            <Col>
              <Form.Control type="text" size="sm" />
            </Col>
            <Form.Label column="sm" lg={1}>
              Amount
            </Form.Label>
            <Col>
              <Form.Control type="text" size="sm" />
            </Col>
            <Form.Label column="sm" lg={1}>
              Date
            </Form.Label>
            <Col>
              <Form.Control type="text" size="sm" />
            </Col>
            <Form.Label column="sm" lg={1}>
              Bank
            </Form.Label>
            <Col>
              <Form.Control type="text" size="sm" />
            </Col>
          </Form.Row>
          <Form.Row>
            <Form.Label column="sm" lg={1}>
              2.DD.No>
            </Form.Label>
            <Col>
              <Form.Control type="text" size="sm" />
            </Col>
            <Form.Label column="sm" lg={1}>
              Amount
            </Form.Label>
            <Col>
              <Form.Control type="text" size="sm" />
            </Col>
            <Form.Label column="sm" lg={1}>
              Date
            </Form.Label>
            <Col>
              <Form.Control type="text" size="sm" />
            </Col>
            <Form.Label column="sm" lg={1}>
              Bank
            </Form.Label>
            <Col>
              <Form.Control type="text" size="sm" />
            </Col>
          </Form.Row>
        </Form.Group>
        <br />
        <Form inline>
          <Form.Label column="sm" lg={2}>
            NSAKCET Regd No
          </Form.Label>

          <Form.Control size="sm" type="text" />
          <lable style={{ marginLeft: "300px" }}>
            Signature <br />
            Office Incharge Of Admission Counter
          </lable>
        </Form>
      </Form>
      <br />
      <h3 style={{ backgroundColor: "#EE7C7C", color: "green" }}>
        Admission Details
      </h3>
      <Form>
        <Row>
          <Col>
            <Form.Label>Hall Ticket No.</Form.Label>
          </Col>
          <Col>
            <Form.Control type="text" size="sm" />
          </Col>
        </Row>

        <Row>
          <Col>
            <Form.Label>
              Name Of The Candidate(mr/mrs/miss)
              <br />
              (IN BLOCK LETTERS AS PER SSC)
            </Form.Label>
          </Col>
          <Col>
            <Form.Control type="text" size="sm" />
          </Col>
        </Row>
      </Form>
      <Form inline>
        <Form.Label column="sm" lg={2}>
          Adhar ID (UID)
        </Form.Label>

        <Form.Control size="sm" type="text" />
        <lable style={{ marginLeft: "300px" }}>PAN Card (if any)</lable>
        <Form.Control size="sm" type="text" />
      </Form>
      <Row>
        <Col>
          <Form.Label>
            Name OF Father <br />
            (IN BLOCK LETTERS AS PER SSC)
          </Form.Label>
        </Col>
        <Col>
          <Form.Control size="sm" type="text" />
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Label>
            Name OF Mother <br />
            (IN BLOCK LETTERS AS PER SSC)
          </Form.Label>
        </Col>
        <Col>
          <Form.Control size="sm" type="text" />
        </Col>
      </Row>
      <Form inline>
        <Form.Label>Date Of Birth (AS PER SSC)</Form.Label>
        <Form.Control size="sm" type="text" />
        (DD/MM/YY)
        <Col></Col>
        <Col>
          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>sex</Form.Label>
            <Form.Control as="select" defaultValue="Choose...">
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
              ))}
            </Form.Control>
          </Form.Group>
        </Col>
        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>Type Of Admission</Form.Label>
          <Form.Control as="select" defaultValue="Choose...">
            <option>Management</option>
            <option>Convener</option>
            <option>Spot</option>
            ))}
          </Form.Control>
        </Form.Group>
      </Form>
      <Form inline>
        <Form.Label column="sm" lg={2}>
          Admission Category
          <br />
          (SC,OBS,ST,General,GOI etc.)
        </Form.Label>

        <Form.Control size="sm" type="text" />
        <lable style={{ marginLeft: "300px" }}>Cast</lable>
        <Form.Control size="sm" type="text" />
      </Form>
      <Form inline>
        <Form.Label column="sm" lg={2}>
          Mother Tongue:
        </Form.Label>

        <Form.Control size="sm" type="text" />
        <lable style={{ marginLeft: "300px" }}>Blood Group:</lable>
        <Form.Control size="sm" type="text" />
      </Form>
      <Form inline>
        <Form.Label column="sm" lg={2}>
          Email ID:
        </Form.Label>

        <Form.Control size="sm" type="text" />
        <lable style={{ marginLeft: "300px" }}>Identification Mark:</lable>
        <Form.Control size="sm" type="text" />
      </Form>
      <Form inline>
        <Form.Label column="sm" lg={2}>
          Father Occupation:
        </Form.Label>

        <Form.Control size="sm" type="text" />
        <lable style={{ marginLeft: "300px" }}>Phone no:</lable>
        <Form.Control size="sm" type="text" />
      </Form>
      <Form inline>
        <Form.Label column="sm" lg={2}>
          Father Occupation:
        </Form.Label>

        <Form.Control size="sm" type="text" />
        <lable style={{ marginLeft: "300px" }}>Phone:</lable>
        <Form.Control size="sm" type="text" />
      </Form>
      <h3 style={{ backgroundColor: "#EE7C7C", color: "green" }}>
        Admission Details (SSC/CBSC/X/ICSE Std.Details)
      </h3>
      <Row>
        <Col>
          <Form.Label>Board Of Exam</Form.Label>
        </Col>
        <Col>
          <Form.Control size="sm" type="text" />
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Label>Name OF School :</Form.Label>
        </Col>
        <Col>
          <Form.Control size="sm" type="text" />
        </Col>
      </Row>
      <Form inline>
        <Form.Label>Hall Ticket No.</Form.Label>
        <Form.Control size="sm" type="text" />
        <Form.Label>Total Marks Obtained :</Form.Label>
        <Form.Control size="sm" type="text" />
      </Form>
      <Form inline>
        {/* <Form.Label>Maximum Marks :</Form.Label>
        <Form.Control size="sm" type="text" />
        <Form.Label>Passing Month :</Form.Label>
        <Form.Control size="sm" type="text" /> */}
      </Form>
      <Form inline>
        <Form.Label>Maximum Marks :</Form.Label>
        <Form.Control size="sm" type="text" />
        <Form.Label>Passing Month :</Form.Label>
        <Form.Control size="sm" type="text" />
        <Form.Label>Year :</Form.Label>
        <Form.Control size="sm" type="text" />
        <Form.Label>Percentage Marks Scored:</Form.Label>
        <Form.Control size="sm" type="text" />
        <Form.Label>Grade:</Form.Label>
        <Form.Control size="sm" type="text" />
      </Form>
      <Button>next</Button>
      <Row style={{ backgroundColor: "lightgray" }}>
        <Col lg={4}>sfkfhkfhskfhkhkf:</Col>
        <Col lg={8}>
          <Form.Control size="sm" type="text" style={{ width: "70%" }} />
        </Col>
      </Row>
      <Row>
        <Col lg={4}>sfkfhkfhskfhkhkf:</Col>
        <Col lg={8}>
          <Form.Control size="sm" type="text" style={{ width: "70%" }} />
        </Col>
      </Row>
      <Row style={{ backgroundColor: "lightgray" }}>
        <Col lg={4}>sfkfhkfhskfhkhkf:</Col>
        <Col lg={8}>
          <Form.Control size="sm" type="text" style={{ width: "70%" }} />
        </Col>
      </Row>
      <Row>
        <Col lg={4}>sfkfhkfhskfhkhkf:</Col>
        <Col lg={8}>
          <Form.Control size="sm" type="text" style={{ width: "70%" }} />
        </Col>
      </Row>
    </div>
  );
};
