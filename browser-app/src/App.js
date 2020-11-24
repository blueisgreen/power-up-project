import React from 'react'
import { Route } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import HomePage from './component/HomePage'
import MemberAdminPage from './component/admin/MemberAdminPage'

const App = () => {
  return (
    <Container>
      <Nav variant="pills">
        <Nav.Link href="/">
          Home
        </Nav.Link>
        <Nav.Link href="/member-admin">
          Member Admin
        </Nav.Link>
      </Nav>
      <Route exact path="/" component={HomePage} />
      <Route path="/member-admin" component={MemberAdminPage} />
    </Container>
  )
}
export default App
