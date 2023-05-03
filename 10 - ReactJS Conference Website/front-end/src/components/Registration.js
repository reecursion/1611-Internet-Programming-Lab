import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const Registration = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [workshop, setWorkshop] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Workshop: ${workshop}`);
  };

  return (
    <div className='page-container'>
      <h1>Pre-Conference Workshop Registration</h1>

      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" value={name} onChange={(event) => setName(event.target.value)} />
        </Form.Group>
        <br></br>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
        </Row>
        <br></br>
        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label>Address</Form.Label>
          <Form.Control placeholder="1234 Main St" />
        </Form.Group>
        <br></br>
        <Row>
          <Col xs={7}>
            <Form.Control placeholder="City" />
          </Col>
          <Col>
            <Form.Control placeholder="State" />
          </Col>
          <Col>
            <Form.Control placeholder="Zip" />
          </Col>
        </Row>
        <br></br>
        <Form.Group controlId="formWorkshop">
          <Form.Label>Workshop</Form.Label>
          <Form.Control as="select" value={workshop} onChange={(event) => setWorkshop(event.target.value)}>
            <option value="">Select a workshop</option>
            <option value="Natural Language Processing">Natural Language Processing</option>
            <option value="Machine Learning">Machine Learning</option>
            <option value="Deep Learning">Deep Learning</option>
          </Form.Control>
        </Form.Group>

        <br></br>
        <p className='center-button'>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </p>
      </Form>
    </div>
  );
};

export default Registration;
