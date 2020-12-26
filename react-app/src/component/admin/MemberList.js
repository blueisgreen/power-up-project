import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

const MemberList = ({ members, onSelect }) => {
  const rows = members.map((member) => (
    <Row key={member.id}>
      <Col xs={1}>ID: {member.id}</Col>
      <Col xs={4}>Screen Name: {member.screenName}</Col>
      <Col xs={5}>Email: {member.email}</Col>
      <Col xs={2}>
        <Button
          variant="outline-info"
          size="sm"
          onClick={() => onSelect(member)}
        >
          Select
        </Button>
      </Col>
    </Row>
  ))

  return (
    <Container>
      <h2>Members</h2>
      {rows}
    </Container>
  )
}

export default MemberList
