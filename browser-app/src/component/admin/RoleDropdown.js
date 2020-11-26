import React, { useContext } from 'react'
import { ClientStore } from '../../state/ClientStoreProvider'
import Form from 'react-bootstrap/Form'

const RoleDropdown = () => {
  const [state, dispatch] = useContext(ClientStore)
  const options = state.systemCodes.role
    ? state.systemCodes.role.map((item) => (
        <option key={item.id} value={item.id}>
          {item.displayName}
        </option>
      ))
    : []
  return (
    <Form.Group controlId="roleSelect">
      <Form.Label>Role</Form.Label>
      <Form.Control as="select">{options}</Form.Control>
    </Form.Group>
  )
}

export default RoleDropdown
