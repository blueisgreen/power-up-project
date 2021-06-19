import { api } from '../boot/axios'

export async function fetchArticles() {
  console.log('PowerUpService.fetchArticles')
  return await api.get('/articles')
}

export async function createArticle(update) {
  console.log('PowerUpService.createArticle', update)
  return await api.post('/articles/', update)
}

export async function saveArticle(update) {
  console.log('PowerUpService.saveArticle', update)
  return await api.put(`/articles/${update.id}`, update)
}
