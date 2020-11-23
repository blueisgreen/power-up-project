import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

export default function LoginBox(params) {

  return (
    <Container>
      <Row>
        <Col>
          <h1>Sign In / Sign Up</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form>
            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="text"
                id="email"
                name="email"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                id="password"
                name="password"
              />
            </Form.Group>
            <Button id="login">Sign In</Button>
            <Button id="signup">Sign Up</Button>
            <a href="/oauth/github">Sign In / Sign Up using GitHub</a>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}