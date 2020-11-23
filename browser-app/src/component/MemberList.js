import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

const MemberList = ({ members, onSelect }) => {
  const rows = members.map((member) => (
    <Row key={member.id}>
      <Col>{member.id}</Col>
      <Col>{member.screenName}</Col>
      <Col>{member.email}</Col>
      <Col>{member.id}</Col>
      <Col><Button onClick={() => onSelect(member)}>Select</Button></Col>
    </Row>
  ))

  return (
    <Container>
      <Row>{rows}</Row>
    </Container>
  )
}

export default MemberList
