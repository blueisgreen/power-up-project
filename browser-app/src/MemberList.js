import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup'

export default function MemberList(params) {
  const { members, onSelect } = params
  const items = !members
    ? []
    : members.map((member) => (
        <ListGroup.Item
          key={member.id}
          tag="button"
          action
          value={member.id}
          onClick={(event) => onSelect(event.target.value)}
        >
          {member.email} {member.nickname}
        </ListGroup.Item>
      ))

  return <ListGroup>{items}</ListGroup>
}
