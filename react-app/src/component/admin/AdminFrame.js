import React, { useContext, useEffect } from 'react'
import { Route, Switch, useRouteMatch } from 'react-router-dom'
import api from '../../api/PowerUpServiceProxy'
import { ClientStore } from '../../state/ClientStoreProvider'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Nav from 'react-bootstrap/Nav'
import AdminDashboard from './AdminDashboard'
import MemberAdminPage from './MemberAdminPage'
import SystemCodeAdminPage from './SystemCodeAdminPage'
import _ from 'lodash'

const AdminFrame = () => {
  const [state, dispatch] = useContext(ClientStore)

  const mapCodes = (rawCodes) => {
    const topLevel = _.filter(rawCodes, (item) => {
      return !item.parent_id
    })
    const top = _.keyBy(topLevel, 'id')
    const codes = {}
    _.forEach(rawCodes, (item) => {
      const category = item.parent_id
        ? top[item.parent_id].publicKey
        : 'category'
      if (!codes[category]) {
        codes[category] = []
      }
      codes[category].push(item)
    })
    console.log('system codes', codes)
    return codes
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.codes.find()
        const mappedCodes = mapCodes(response.data)
        dispatch({
          type: 'FETCH_CODES',
          payload: mappedCodes,
        })
      } catch (err) {
        console.log('something went wrong', err)
      }
    }
    fetchData()
  }, [dispatch])

  // FIXME use subroutes?
  let { path, url } = useRouteMatch()

  return (
    <Container>
      <Row>
        <Col xs={2} className="side-nav">
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
