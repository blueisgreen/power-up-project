import { api } from '../boot/axios'

const fetchArticles = () => {
  return api
    .get('/articles')
    .then((response) => {
      return response.data
    })
    .catch((err) => {
      console.log('API problem', err)
    })
}

export default {
  fetchArticles,
}
