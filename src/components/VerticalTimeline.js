import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './VerticalTimeline.css'; // Import the CSS file for styling

const VerticalTimeline = () => {
  return (
    <Container className="timeline-container">
      <Row>
        <Col md={6} className="timeline-item">
          <Card className="animated-card">
            <Card.Body>
              <Card.Title>Event 1</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Card.Text>
              <Card.Text>Date: January 1, 2023</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col md={6} className="timeline-item">
          <Card className="animated-card">
            <Card.Body>
              <Card.Title>Event 2</Card.Title>
              <Card.Text>
                Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Card.Text>
              <Card.Text>Date: February 15, 2023</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col md={6} className="timeline-item">
          <Card className="animated-card">
            <Card.Body>
              <Card.Title>Event 3</Card.Title>
              <Card.Text>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </Card.Text>
              <Card.Text>Date: March 30, 2023</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default VerticalTimeline;
