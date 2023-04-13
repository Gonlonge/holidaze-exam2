import React from "react";
import { Card, Col, Row } from "react-bootstrap";

function Cards() {
  return (
    <Row xs={1} sm={2} md={3} lg={4} xl={5} xxl={6}>
      {Array.from({ length: 12 }).map((_, idx) => (
        <Col key={idx}>
          <Card>
            <Card.Body>
              <Card.Title>Card {idx + 1}</Card.Title>
              <Card.Text>
                This is a sample card with some sample text.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default Cards;
