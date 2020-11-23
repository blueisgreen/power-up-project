import React, { useContext, useEffect } from 'react'
import api from '../api/PowerUpServiceProxy'
import Container from 'react-bootstrap/Container'
import MemberList from './MemberList'
import MemberProfile from './MemberProfile'
import { ClientStore } from '../state/ClientStoreProvider'

const MemberAdminPage = () => {
  const [state, dispatch] = useContext(ClientStore)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.members.find()
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
      <MemberProfile member={state.member} />
    </Container>
  )
}

export default MemberAdminPage
