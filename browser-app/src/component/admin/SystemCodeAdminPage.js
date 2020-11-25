import React, { useContext } from 'react'
import { ClientStore } from '../../state/ClientStoreProvider'
import _ from 'lodash'

const SystemCodeAdminPage = () => {
  const [state, dispatch] = useContext(ClientStore)
  const codes = state.systemCodes
  const keys = _.keys(codes)

  const showCodes = keys.map((key) => {
    const details = codes[key].map(code => {
      return (
        <li>{code.displayName} ({code.publicKey} : {code.id})</li>
      )
    })
    return (
      <div>
        <h3>{key}</h3>
        <ul>
          {details}
        </ul>
      </div>
    )
  })

  return (
    <div>
      <h1>System Codes</h1>
      <p>Make it easy to discover and update system codes.</p>
      {showCodes}
    </div>
  )
}

export default SystemCodeAdminPage
