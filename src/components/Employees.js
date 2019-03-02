import React, { Component } from "react";
import { Col, Row, Button } from "react-bootstrap";
import { Employee } from "../components";

const employees = [
  {
    name: "Jimmy Henderson",
    email: "henderson399@gmail.com",
    image: require("../assets/images/user1.png"),
    empCode: "CU009",
    designation: "Angular Developer",
    phone: "788-998-1643",
    joiningDate: "Mar 27, 2016"
  },
  {
    name: "Jimmy Henderson",
    email: "henderson399@gmail.com",
    image: require("../assets/images/user1.png"),
    empCode: "CU009",
    designation: "Angular Developer",
    phone: "788-998-1643",
    joiningDate: "Mar 27, 2016"
  },
  {
    name: "Jimmy Henderson",
    email: "henderson399@gmail.com",
    image: require("../assets/images/user1.png"),
    empCode: "CU009",
    designation: "Angular Developer",
    phone: "788-998-1643",
    joiningDate: "Mar 27, 2016"
  },
  {
    name: "Jimmy Henderson",
    email: "henderson399@gmail.com",
    image: require("../assets/images/user1.png"),
    empCode: "CU009",
    designation: "Angular Developer",
    phone: "788-998-1643",
    joiningDate: "Mar 27, 2016"
  },
  {
    name: "Jimmy Henderson",
    email: "henderson399@gmail.com",
    image: require("../assets/images/user1.png"),
    empCode: "CU009",
    designation: "Angular Developer",
    phone: "788-998-1643",
    joiningDate: "Mar 27, 2016"
  }
];
export default class Employees extends Component {
  render() {
    return (
      <Col xs={12}>
        <Col xs={12} className="header grey d-none d-sm-block">
          <Row>
            <Col xs={12} sm={1} />
            <Col xs={12} sm={3} className="text-center">
              Basic Info
            </Col>
            <Col xs={12} sm={1} className="text-center">
              Emp Code
            </Col>
            <Col xs={12} sm={2} className="text-center">
              Designation
            </Col>
            <Col xs={12} sm={2} className="text-center">
              Phone Number
            </Col>
            <Col xs={12} sm={2} className="text-center">
              Joining Date
            </Col>
          </Row>
        </Col>
        {employees.map((employee, key) => (
          <Employee key={key} {...employee} index={key} />
        ))}
        <Col xs={12} className="text-center load-more">
          <Button variant="outline-primary">Load More</Button>
        </Col>
      </Col>
    );
  }
}
