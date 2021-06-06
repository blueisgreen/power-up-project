<template>
  <q-page class="q-pa-md">
    <h1>Articles</h1>
    <button @click="loadArticles">Load</button>
    <div v-for="article in handler.articles" :key="article.id" class="row q-gutter-md">
      <span @click="() => select(article)">
        <strong>{{ article.headline }}</strong
        >. Published on
        {{ date.formatDate(article.publishedAt, 'MMM D, YYYY @ H:mm') }}
      </span>
    </div>
    <hr />
    <article-detail :article="activeArticle" @close="unselect" />
  </q-page>
</template>

<script>
import { api } from '../boot/axios'
import { date } from 'quasar'
import ArticleDetail from '../components/ArticleDetail.vue'
import useArticleHandler from '../composables/use-article-handler'

let handler = useArticleHandler()

export default {
  components: { ArticleDetail },
  setup() {
    return {
      handler,
      articles: handler.articles,
      activeArticle: handler.activeArticle,
      date,
    }
  },
  computed: {
    publishedArticles() {
      console.log('called publishedArticles', this.articles)
      return this.articles.filter((e) => e.publishedAt)
    },
  },
  methods: {
    loadArticles() {
      console.log('called getArticles')
      api
        .get('/articles')
        .then((response) => {
          handler.load(response.data)
        })
        .catch((err) => {
          console.log('API problem', err)
        })
    },
    select(article) {
      console.log('select', article.id)
      handler.select(article)
    },
    unselect() {
      handler.unselect()
    },
  },
}
</script>

<style lang="scss" scoped></style>
