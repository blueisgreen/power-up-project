import feathers from '@feathersjs/client'
import rest from '@feathersjs/rest-client'

const app = feathers()
const restClient = rest('http://localhost:3030')
app.configure(restClient.fetch(window.fetch))
app.configure(feathers.authentication({
  storage: window.localStorage
}))

const login = async () => {
  try {
    return await app.reAuthenticate()
  } catch (error) {
    return await app.authenticate({
      strategy: 'local',
      email: 'bubba@gmail.com',
      password: 'boo'
    })
  }
}

export const members = app.service('members')
export const codes = app.service('codes')

const api = { members, codes }
export default api
