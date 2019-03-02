import React, { Component } from "react";
import { Col } from "react-bootstrap";
import { Employees } from "./components";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Col xs={12} className="main">
        <Employees />
      </Col>
    );
  }
}

export default App;
