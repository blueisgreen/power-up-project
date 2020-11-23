import React, { useContext, useEffect } from 'react'
import api from '../api/PowerUpServiceProxy'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import MemberList from './MemberList'
import MemberProfile from './MemberProfile'
import { ClientStore } from '../state/ClientStoreProvider'

const MemberAdminPage = () => {
  const [state, dispatch] = useContext(ClientStore)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.members.find()
        console.log('response from api.members.find()', response)
        dispatch({
          type: 'FETCH_MEMBERS',
          payload: response.data,
        })
      } catch (err) {
        console.log('something went wrong', err)
      }
    }
    fetchData()
  }, [dispatch])

  const handleSelectMember = (member) => {
    console.log('Selected member', member)
    dispatch({
      type: 'FETCH_MEMBER',
      payload: member,
    })
  }

  console.log('known members', state.members)

  return (
    <Container>
      <Row>
        <Col>
          <h2>Members</h2>
          <MemberList members={state.members} onSelect={handleSelectMember} />
        </Col>
      </Row>
      <Row>
        <Col>
          <h3>Member Information</h3>
          <MemberProfile member={state.member} />
        </Col>
      </Row>
    </Container>
  )
}

export default MemberAdminPage
