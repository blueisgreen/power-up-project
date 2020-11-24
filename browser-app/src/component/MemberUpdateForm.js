import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import api from '../api/PowerUpServiceProxy'
import { ClientStore } from '../state/ClientStoreProvider'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const MemberUpdateForm = () => {
  const [state, dispatch] = useContext(ClientStore)
  const { register, errors, handleSubmit } = useForm({
    defaultValues: state.member,
  })

  const updateMemberDetails = async (data) => {
    try {
      console.log('about to patch', data)
      const response = await api.members.patch(state.member.id, data)
      console.log('response from patch', response)
      dispatch({
        type: 'UPDATE_MEMBER',
        payload: response,
      })
    } catch (err) {
      console.log('Something went wrong with member update', err)
    }
  }

  const onSubmit = async (data) => {
    await updateMemberDetails(data)
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Group controlId="screenName">
        <Form.Label>Screen Name</Form.Label>
        <Form.Control
          name="screenName"
          type="text"
          ref={register({ required: true })}
          placeholder="Enter screen name"
        />
        <span>
          {errors.screenName &&
            errors.screenName.type === 'required' &&
            'You must use a screen name'}
        </span>
        <Form.Text className="text-muted">
          Your alias within the Power Up world.
        </Form.Text>
      </Form.Group>
      <Button variant="primary" type="submit">
        Save
      </Button>
    </Form>
  )
}

export default MemberUpdateForm
