import React from 'react'
import { Route, Switch, useRouteMatch } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Nav from 'react-bootstrap/Nav'
import AdminDashboard from './AdminDashboard'
import MemberAdminPage from './MemberAdminPage'
import SystemCodeAdminPage from './SystemCodeAdminPage'

const AdminFrame = () => {
  // FIXME use subroutes?
  let { path, url } = useRouteMatch()

  return (
    <Container>
      <Row>
        <Col xs={2}>
          <Nav>
            <Nav.Link href={`${url}`}>Dashboard</Nav.Link>
            <Nav.Link href={`${url}/members`}>Member Admin</Nav.Link>
            <Nav.Link href={`${url}/codes`}>System Codes</Nav.Link>
          </Nav>
        </Col>
        <Col xs={10}>
          <Switch>
            <Route exact path={path} component={AdminDashboard} />
            <Route path={`${path}/members`} component={MemberAdminPage} />
            <Route path={`${path}/codes`} component={SystemCodeAdminPage} />
          </Switch>
        </Col>
      </Row>
    </Container>
  )
}

export default AdminFrame
