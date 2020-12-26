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

const main = async () => {
  const auth = await login()
  console.log('User is authenticated', auth)
  await app.logout()
}

main()
