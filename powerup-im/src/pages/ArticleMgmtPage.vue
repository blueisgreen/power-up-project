<template>
  <q-page class="q-pa-md">
    <h1>Article Management</h1>
    <div v-if="!activeArticle">
      <div>
        <q-btn
          color="green"
          icon="add_circle"
          label="New Article"
          @click="addArticle"
        />
      </div>
    </div>
    <article-list :articles="allArticles" count="42" />
    <article-detail v-if="activeArticle" />
  </q-page>
</template>

<script>
import { onMounted, ref } from 'vue'
import ArticleList from '../components/ArticleList.vue'
import ArticleDetail from '../components/ArticleDetail.vue'
import useArticleHandler from '../composables/use-article-handler'
import { fetchArticles } from '../api/PowerUpService'

export default {
  components: { ArticleDetail, ArticleList },
  setup() {
    const handler = useArticleHandler()
    const getArticles = async () => {
      const results = await fetchArticles()
      handler.load(results.data)
    }

    onMounted(getArticles)

    return {
      handler,
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
