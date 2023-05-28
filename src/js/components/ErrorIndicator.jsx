// Indicator if something crash

import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function ErrorIndicator() {
  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs={12} sm={8} md={6} lg={4}>
          <div className="text-center">
            <h2 className="text-danger">Oh no! Something went wrong</h2>
            <p>Please try again later</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default ErrorIndicator;
