import React from 'react'
import _ from 'lodash'

export default function MemberProfile(params) {
  const { member } = params
  if (_.isEmpty(member)) {
    return <p>No member has been selected.</p>
  } else {
    return (
      <div>
        <h2>Member Spotlight</h2>
        <p>ID: {member.id}</p>
        <p>Nickname: {member.nickname}</p>
        <p>Email: {member.email}</p>
      </div>
    )
  }
}
