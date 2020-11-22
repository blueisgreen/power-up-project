import React from 'react'

export default function MemberProfile(params) {
  const { member } = params
  if (!member) {
    return <p>No member has been selected.</p>
  } else {
    return (
      <>
        <p>ID: {member.id}</p>
        <p>Nickname: {member.nickname}</p>
        <p>Email: {member.email}</p>
      </>
    )
  }
}
