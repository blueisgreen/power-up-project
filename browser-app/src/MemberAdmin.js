import React, { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import MemberList from './MemberList'
import MemberProfile from './MemberProfile'

export default function MemberAdmin(params) {
  const [activeMember, setActiveMember] = useState('0')

  // get list of members
  const member = {
    id: '1',
    email: 'bubba@geniv-nuclear.com',
    nickname: 'Bubba Frump',
  }
  const members = [member]
  const membersByKey = {
    '1': member,
  }

  // function to select one from the list
  const handleSelect = (key) => {
    console.log('selected', key)
    setActiveMember(key)
  }

  return (
    <Container>
      <Row>
        <Col>
          <h2>Members</h2>
          <MemberList members={members} onSelect={handleSelect} />
        </Col>
      </Row>
      <Row>
        <Col>
          <h3>Member Information</h3>
          <MemberProfile member={membersByKey[activeMember]} />
        </Col>
      </Row>
    </Container>
  )
}
