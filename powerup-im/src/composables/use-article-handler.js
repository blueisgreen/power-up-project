import { reactive } from 'vue'

const articles = reactive([])
const activeArticle = reactive({})

export const useArticleHandler = function () {
  let load = function(articles) {
    console.log('loading...')
    articles.forEach(article => {
      articles.push(article)
      console.log(article)
    })
  }
  let select = function(article) {
    activeArticle = article
  }
  let unselect = function() {
    activeArticle = null
  }
  return {
    articles,
    activeArticle,
    load,
    select,
    unselect
  }
}

export default useArticleHandler
