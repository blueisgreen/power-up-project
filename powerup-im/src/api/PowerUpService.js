import { api } from '../boot/axios'

export async function fetchArticles() {
  console.log('PowerUpService.fetchArticles')
  return await api.get('/articles')
}

export async function saveArticle(update) {
  console.log('PowerUpService.saveArticle', update)
  return await api.put(`/articles/${update.id}`, update)
}
