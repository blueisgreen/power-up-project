import React from 'react'
import { NavLink, Route } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import HomePage from './component/HomePage'
import MemberAdminPage from './component/MemberAdminPage'

const App = () => {
  return (
    <Container>
      <Nav>
        <Nav.Link>
        <NavLink className="item" activeClassName="active" exact to="/">
          Home
        </NavLink>
        </Nav.Link>
        <Nav.Link>
        <NavLink className="item" activeClassName="active" to="/member-admin">
          Member Admin
        </NavLink>
        </Nav.Link>
      </Nav>
      <Route exact path="/" component={HomePage} />
      <Route path="/member-admin" component={MemberAdminPage} />
    </Container>
  )
}
export default App
