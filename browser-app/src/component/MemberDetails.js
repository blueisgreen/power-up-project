import React, { useState } from 'react'
import _ from 'lodash'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import MemberUpdateForm from './MemberUpdateForm'

const NO_VALUE = '-- none --'

const MemberDetails = ({ member }) => {
  const [isEdit, setIsEdit] = useState(false)

  function handleToggleEdit() {
    setIsEdit(!isEdit)
  }

  if (_.isEmpty(member)) {
    return <p>No member has been selected.</p>
  } else if (isEdit) {
    return <MemberUpdateForm member={member} />
  } else {
    return (
      <Container>
        <h2>Member Details</h2>
        <Row>
          <Col xs={12}>
            <Button onClick={handleToggleEdit}>{isEdit ? 'Cancel' : 'Edit'}</Button>
          </Col>
        </Row>
        <Row>
          <Col xs={2}>ID</Col>
          <Col>{member.id}</Col>
        </Row>
        <Row>
          <Col xs={2}>Screen Name</Col>
          <Col>{member.screenName || NO_VALUE}</Col>
        </Row>
        <Row>
          <Col xs={2}>Email</Col>
          <Col>{member.email}</Col>
        </Row>
        <Row>
          <Col xs={2}>Auth0</Col>
          <Col>{member.auth0Id || NO_VALUE}</Col>
        </Row>
        <Row>
          <Col xs={2}>GitHub</Col>
          <Col>{member.githubId || NO_VALUE}</Col>
        </Row>
        <Row>
          <Col xs={2}>Google</Col>
          <Col>{member.googleId || NO_VALUE}</Col>
        </Row>
        <Row>
          <Col xs={2}>Roles</Col>
          <Col>{NO_VALUE}</Col>
        </Row>
      </Container>
    )
  }
}

export default MemberDetails
