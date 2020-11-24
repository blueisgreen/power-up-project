import React, { useContext, useEffect } from 'react'
import api from '../api/PowerUpServiceProxy'
import Container from 'react-bootstrap/Container'
import MemberList from './MemberList'
import MemberDetails from './MemberDetails'
import { ClientStore } from '../state/ClientStoreProvider'

const MemberAdminPage = () => {
  const [state, dispatch] = useContext(ClientStore)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.members.find()
        console.log('Found members:', response.data)
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

  return (
    <Container>
      <MemberList members={state.members} onSelect={handleSelectMember} />
      <hr/>
      <MemberDetails member={state.member} />
    </Container>
  )
}

export default MemberAdminPage
