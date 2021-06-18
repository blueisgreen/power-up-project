import { api } from '../boot/axios'

export async function fetchArticles() {
  console.log('PowerUpService.fetchArticles')
  return await api.get('/articles')
}

export async function saveArticle(update) {
  console.log('PowerUpService.saveArticle', update)
  let response
  if (!update.id || update.id === -1) {
    delete update.id
    response = await api.post('/articles/', update)
  } else {
    response = await api.put(`/articles/${update.id}`, update)
  }
  return response
}
