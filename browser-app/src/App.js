import React from 'react'
import { NavLink, Route } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import HomePage from './component/HomePage'
import MemberAdminPage from './component/MemberAdminPage'

const App = () => {
  return (
    <Container>
      <nav>
        <NavLink className="item" activeClassName="active" exact to="/">
          Home
        </NavLink>
        <NavLink className="item" activeClassName="active" to="/member-admin">
          Member Admin
        </NavLink>
      </nav>
      <Route exact path="/" component={HomePage} />
      <Route path="/member-admin" component={MemberAdminPage} />
    </Container>
  )
}
export default App
