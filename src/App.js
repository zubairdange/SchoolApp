import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col } from "react-bootstrap";
import { Home } from "./component/Home/Home";
import { Chart } from "./component/Charts/Chart";

import { MyNavbar } from "./component/MyNavbar";

function App() {
  return (
    <div>
      <MyNavbar />
      <Chart />
    </div>
  );
}

export default App;
