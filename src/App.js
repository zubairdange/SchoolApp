import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col } from "react-bootstrap";
import { Home } from "./component/Home/Home";
import { Chart } from "./component/Charts/Chart";
import { MyBar } from "./component/MyBar/MyBar";

import { MyNavbar } from "./component/MyNavbar";

function App() {
  return (
    <div>
      <MyNavbar />
      <Chart />
      <MyBar />
    </div>
  );
}

export default App;
