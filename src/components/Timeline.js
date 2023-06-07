import React from 'react';
import Fade from 'react-bootstrap/Fade';
import { Container, Row, Col, Card } from 'react-bootstrap';

function Timeline() {
  return (
    <Fade id='Timeline' in appear timeout={3000}>
    <Container>
      <Row>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Event 1</Card.Title>
              <Card.Text>Description of Event 1</Card.Text>
            </Card.Body>
            <Card.Footer>Date and Time of Event 1</Card.Footer>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Event 2</Card.Title>
              <Card.Text>Description of Event 2</Card.Text>
            </Card.Body>
            <Card.Footer>Date and Time of Event 2</Card.Footer>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Event 3</Card.Title>
              <Card.Text>Description of Event 3</Card.Text>
            </Card.Body>
            <Card.Footer>Date and Time of Event 3</Card.Footer>
          </Card>
        </Col>
      </Row>
    </Container>
    </Fade> 
  );
}

export default Timeline;