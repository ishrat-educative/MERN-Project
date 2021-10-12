import React, { Component } from "react";

import { Row, Col, Container } from "react-bootstrap";

function TestComponent() {
  return (
    <div>
      <Container>
        <Row>
          <Col>1 of 3</Col>
          <Col>2 of 3</Col>
          <Col>3 of 3</Col>
        </Row>
      </Container>
    </div>
  );
}

export default TestComponent;
