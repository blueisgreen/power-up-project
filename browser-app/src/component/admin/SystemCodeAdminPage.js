import React, { useContext } from 'react'
import { ClientStore } from '../../state/ClientStoreProvider'
import _ from 'lodash'

const displayCodes = (codes) => {
  const keys = _.keys(codes)
  const showCodes = keys.map((key) => {
    const details = codes[key].map(code => {
      return (
        <li>{code.displayName} ({code.publicKey} : {code.id})</li>
      )
    })
    const index = _.findIndex(codes.category, ['publicKey', key])
    const catName = (index >= 0) ? codes.category[index].displayName : '--Categories--'
    return (
      <div>
        <h3>{catName}</h3>
        <ul>
          {details}
        </ul>
      </div>
    )
  })
  return showCodes
}

const SystemCodeAdminPage = () => {
  const [state, dispatch] = useContext(ClientStore)

  return (
    <div>
      <h1>System Codes</h1>
      <p>Make it easy to discover and update system codes.</p>
      {displayCodes(state.systemCodes)}
    </div>
  )
}

export default SystemCodeAdminPage
