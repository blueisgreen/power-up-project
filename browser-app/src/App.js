import React from 'react'
import './App.css'
import { Route, Switch } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import HomePage from './component/HomePage'
import AdminFrame from './component/admin/AdminFrame'

const App = () => {
  return (
      <Container className="App">
        <Nav variant="pills">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/admin">System Admin</Nav.Link>
        </Nav>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/admin" component={AdminFrame} />
        </Switch>
      </Container>
  )
}
export default App
