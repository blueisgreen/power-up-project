import { reactive, ref, computed } from 'vue'

const articles = reactive([])
const activeId = ref(null)

export const useArticleHandler = function () {

  let activeArticle = computed(() => {
    console.log('use-article-handler.activeArticle')
    return activeId.value
    ? articles.find((article) => article.id === activeId.value)
    : null
  })
  let load = function (articlesIn) {
    articlesIn.forEach((article) => {
      articles.push(article)
    })
    console.log('use-article-handler.load', articles)
  }
  let select = function (id) {
    activeId = articles.find((article) => art.id === id)
      ? id
      : null
    console.log('use-article-handler.select', activeId)
  }
  let unselect = function () {
    activeId = null
    console.log('use-article-handler.unselect')
  }
  return {
    articles,
    activeArticle,
    load,
    select,
    unselect,
  }
}

export default useArticleHandler
