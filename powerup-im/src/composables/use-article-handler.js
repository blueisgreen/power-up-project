import { reactive, ref, computed } from 'vue'

const articles = reactive([])
const activeId = ref(null)
let loaded = false

export const useArticleHandler = function () {
  let activeArticle = computed(() => {
    console.log('use-article-handler.activeArticle', activeId)
    return activeId.value
      ? articles.find((article) => article.id === activeId.value)
      : null
  })
  let load = function (articlesIn) {
    activeId.value = null
    if (!loaded) {
      articlesIn.forEach((article) => {
        articles.push(article)
      })
      loaded = true
    }
    console.log('use-article-handler.load', articles)
  }
  let select = function (id) {
    activeId.value = articles.find((article) => article.id === id) ? id : null
    console.log('use-article-handler.select', activeId)
  }
  let unselect = function () {
    activeId.value = null
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
