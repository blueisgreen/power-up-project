import { api } from '../boot/axios'

export async function fetchArticles() {
  return await api.get('/articles')
}

// export default {
//   fetchArticles
// }