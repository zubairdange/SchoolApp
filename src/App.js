import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col } from "react-bootstrap";
import { Home } from "./component/Home/Home";
import { Chart } from "./component/Charts/Chart";
import { MyBar } from "./component/MyBar/MyBar";
import { Rendering } from "./component/Rendering";
import { MyNavbar } from "./component/MyNavbar";

import { Landing } from "./component/Landing";

function App() {
  return (
    <div>
      <MyNavbar />

      <Landing />
    </div>
  );
}

export default App;
