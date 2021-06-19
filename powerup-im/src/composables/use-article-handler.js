import { reactive, ref, computed } from 'vue'

const articles = reactive([])
const activeId = ref(null)
const draft = ref(null)
let loaded = false

export const useArticleHandler = function () {
  let activeArticle = computed(() => {
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
  }
  let replace = function (updatedArticle) {
    const ind = articles.findIndex(
      (article) => article.id === updatedArticle.id
    )
    if (ind > -1) {
      articles[ind] = updatedArticle
    } else {
      console.log('unable to update, not found by ID', updatedArticle)
    }
  }
  let addOrReplace = function (newArticle) {
    this.replaceOrAdd(newArticle)
  }
  let replaceOrAdd = function (newArticle) {
    const ind = articles.findIndex((article) => article.id === newArticle.id)
    if (ind > -1) {
      articles[ind] = newArticle
    } else {
      articles.push(newArticle)
    }
  }
  let select = function (id) {
    activeId.value = articles.find((article) => article.id === id) ? id : null
  }
  let unselect = function () {
    activeId.value = null
  }
  let startNewDraft = function () {
    draft = {
      headline: '',
      byline: '',
      content: ''
    }
  }
  let clearDraft = function() {
    draft.value = null
  }
  return {
    articles,
    activeArticle,
    draft,
    load,
    replace,
    addOrReplace,
    replaceOrAdd,
    select,
    unselect,
    startNewDraft,
    clearDraft,
  }
}

export default useArticleHandler
