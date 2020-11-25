import React, { useReducer, createContext } from 'react'

export const ClientStore = createContext()

const initialState = {
  members: [],
  member: {}, // selected or new
  message: {}, // { type: 'success|fail', title:'Info|Error' content:'lorem ipsum'}
  systemCodes: {}, // { categoryKey: [ {}, {}, {} ] }
}

function reducer(state, action) {
  switch (action.type) {
    case 'FETCH_CODES': {
      return {
        ...state,
        systemCodes: action.payload
      }
    }
    case 'CREATE_MEMBER': {
      return {
        ...state,
        members: [...state.members, action.payload],
        message: {
          type: 'success',
          title: 'Success',
          content: 'New Member created!',
        },
      }
    }
    case 'FETCH_MEMBERS': {
      return {
        ...state,
        members: action.payload,
      }
    }
    case 'FETCH_MEMBER': {
      return {
        ...state,
        member: action.payload,
      }
    }
    case 'UPDATE_MEMBER': {
      const member = action.payload
      return {
        ...state,
        members: state.members.map((item) =>
          item.id === member.id ? member : item
        ),
        member,
        message: {
          type: 'success',
          title: 'Update Successful',
          content: `Member "${member.email}" has been updated!`,
        },
      }
    }
    case 'DELETE_MEMBER': {
      const { _id, email } = action.payload
      return {
        ...state,
        members: state.members.filter((item) => item._id !== _id),
        message: {
          type: 'success',
          title: 'Delete Successful',
          content: `Member "${email}" has been deleted!`,
        },
      }
    }
    case 'FLASH_MESSAGE': {
      return {
        ...state,
        message: action.payload,
      }
    }
    default:
      throw new Error()
  }
}

export const ClientStoreProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const { children } = props

  return (
    <ClientStore.Provider value={[state, dispatch]}>
      {children}
    </ClientStore.Provider>
  )
}
