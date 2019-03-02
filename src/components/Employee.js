import React from "react";
import { Col, Row } from "react-bootstrap";

const Employee = props => {
  const {
    index = 0,
    name = "",
    email = "",
    image = "",
    empCode = "",
    designation = "",
    phone = "",
    joiningDate = ""
  } = props;

  return (
    <Col xs={12} className="employee">
      <Row>
        <Col xs={1} sm={1} className="text grey">
          <span>{index + 1}</span>
        </Col>
        <Col xs={2} sm={1} className="text">
          <img src={image} />
        </Col>
        <Col xs={7} sm={2}>
          <Row>
            <Col xs={12} className="name">
              {name}
            </Col>
            <Col xs={12} className="email d-none d-sm-block">
              {email}
            </Col>
          </Row>
        </Col>
        <Col xs={12} sm={1} className="text d-none d-sm-block">
          <span>{empCode}</span>
        </Col>
        <Col xs={12} sm={2} className="text d-none d-sm-block">
          <span>{designation}</span>
        </Col>
        <Col xs={12} sm={2} className="text d-none d-sm-block">
          <span>{phone}</span>
        </Col>
        <Col xs={12} sm={2} className="text d-none d-sm-block">
          <span>{joiningDate}</span>
        </Col>
        <Col xs={1} sm={1} className="text grey">
          <i className="fas fa-ellipsis-v menu" />
        </Col>
      </Row>
    </Col>
  );
};

export default Employee;
