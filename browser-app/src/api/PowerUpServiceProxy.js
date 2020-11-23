import feathers from '@feathersjs/client'
import rest from '@feathersjs/rest-client'

const app = feathers()
const restClient = rest('http://localhost:3030')
app.configure(restClient.fetch(window.fetch))

const members = app.service('members')

const api = { members }
export default api
