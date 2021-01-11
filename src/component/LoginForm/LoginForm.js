import React, { useState } from "react";
import { Row, Col, Form, Button, Card } from "react-bootstrap";
import { NewAccount } from "../LoginForm/NewAccount";
export const LoginForm = () => {
  const [email, setemail] = useState(" ");
  const [pwd, setpwd] = useState();
  return (
    <React.Fragment>
      {/* <div style={{ marginLeft: "10px" }}> */}
      <Card style={{ width: "25rem" }}>
        <form>
          <h3>Sign In</h3>

          <Row>
            <Col>
              <Form.Label> Email Id</Form.Label>
              <Form.Control
                type="email"
                size="lg"
                padding="18 rem"
                // marginLeft="50px"
                value={email}
                placeholder="Enter Your Email d"
                onChange={(e) => setemail(e.target.value)}
                onFocus={() => setemail(" ")}
              />
            </Col>
            <Col></Col>
          </Row>
          <Row>
            <Col>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                size="lg"
                value={pwd}
                placeholder="Enter Your pawword"
                onChange={(e) => setpwd(e.target.value)}
                onFocus={() => setpwd(" ")}
              />
            </Col>
            <Col></Col>
          </Row>

          <input
            type="checkbox"
            className="custom-control-input"
            id="customCheck1"
          />
          <label className="custom-control-label" htmlFor="customCheck1">
            Remember me
          </label>

          <Row>
            <Button
              type="submit"
              style={{ marginLeft: "60px", marginTop: "50px" }}
            >
              LogIn
            </Button>
            <Button
              href="/NewAccount"
              style={{ marginLeft: "60px", marginTop: "50px" }}
              onClick={NewAccount}
            >
              SignUp
            </Button>
            <p style={{ marginLeft: "60px", marginTop: "50px" }}>
              Forgot <a href="#">password?</a>
            </p>
          </Row>
        </form>
      </Card>
      {/* </div> */}
    </React.Fragment>
  );
};
