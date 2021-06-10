import { api } from '../boot/axios'

export async function fetchArticles() {
  return await api.get('/articles')
}

export async function saveArticle(update) {
  console.log('sending update to service', update)
  return await api.put(`/articles/${update.id}`, update)
}
