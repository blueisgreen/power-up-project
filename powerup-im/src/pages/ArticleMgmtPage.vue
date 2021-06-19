<template>
  <q-page class="q-pa-md">
    <h1>Article Management</h1>
    <div>
      <q-btn
        color="green"
        icon="add_circle"
        label="New Article"
        :disabled="activeArticle"
        @click="addArticle"
      />
    </div>
    <article-list v-if="state.mode === 'list'"
      :articles="allArticles"
      :selected-article="activeArticle"
      @select-article="select" />
    <article-view v-else-if="state.mode === 'view'" :article="activeArticle" />
    <article-edit v-else-if="state.mode === 'edit'" :article="activeArticle" />
    <article-edit v-else-if="state.mode === 'new'" />
  </q-page>
</template>

<script>
import { onMounted, ref } from 'vue'
import ArticleList from '../components/ArticleList.vue'
import ArticleView from '../components/ArticleView.vue'
import ArticleEdit from '../components/ArticleEdit.vue'
import useArticleHandler from '../composables/use-article-handler'
import { fetchArticles } from '../api/PowerUpService'

export default {
  components: { ArticleList, ArticleView, ArticleEdit },
  setup() {
    const handler = useArticleHandler()
    const getArticles = async () => {
      const results = await fetchArticles()
      handler.load(results.data)
    }
    let state = ref({
      mode: 'list', // 'view' 'edit' 'new'
    })

    onMounted(getArticles)

    return {
      handler,
      state,
    }
  },
  computed: {
    allArticles() {
      return this.handler.articles
    },
    activeArticle() {
      console.log('activeArticle', this.handler.activeArticle.value)
      return this.handler.activeArticle.value
    },
  },
  methods: {
    select(article) {
      console.log('handling select-article event')
      this.handler.select(article.id)
    },
    unselect() {
      this.handler.unselect()
    },
    addArticle() {
      console.log('addArticle')
    },
  },
}
</script>

<style lang="scss" scoped></style>
