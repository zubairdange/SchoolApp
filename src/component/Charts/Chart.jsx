import React from "react";
import { Row, Col } from "react-bootstrap";
import { MyChart } from "./MyChart";
import { MyChart1 } from "./MyChart1";
import { MyChart2 } from "./MyChart2";
import { MyChart3 } from "./MyChatr3";
import MyChart4 from "./MyChart4";
import { MyChart5 } from "./MyChart5";
import { MyChart6 } from "./MyChart6";
import { MyChart7 } from "./MyChart7";
import { MyChart8 } from "./MyChart8";
import { MyChart9 } from "./MyChart9";
import { MyChart10 } from "./MyChart10";
export const Chart = () => {
  return (
    <div>
      <Row>
        <Col>
          <MyChart />
        </Col>
        <Col>
          <MyChart1 />
        </Col>
        <MyChart2 />

        <MyChart4 />
        <MyChart5 />
        <Col>
          <MyChart6 />
        </Col>
        <Col>
          <MyChart7 />
        </Col>
        <Col>
          <MyChart8 />
        </Col>
        <MyChart9 />
        <Col>
          <MyChart10 />
        </Col>
      </Row>
    </div>
  );
};
