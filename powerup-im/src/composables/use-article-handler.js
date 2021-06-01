import { reactive } from 'vue'

const state = reactive({
  articles: [],
  activeArticle: null
})

export const useArticleHandler = function () {
  let load = function(articlesIn) {
    console.log('loading...')
    articlesIn.forEach((article) => {
      state.articles.push(article)
    })
  }
  let select = function(article) {
    state.activeArticle = article
  }
  let unselect = function() {
    state.activeArticle = null
  }
  return {
    articles: state.articles,
    activeArticle: state.activeArticle,
    load,
    select,
    unselect,
  }
}

export default useArticleHandler
