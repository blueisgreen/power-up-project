<template>
  <q-page class="q-pa-md">
    <h1>Articles</h1>
    <button @click="loadArticles">Load</button>
    <div v-for="article in articles" :key="article.id" class="row q-gutter-md">
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
import { ref } from 'vue'
import ArticleDetail from '../components/ArticleDetail.vue'

export default {
  components: { ArticleDetail },
  setup() {
    return {
      articles: ref([]),
      activeArticle: ref(null),
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
          this.articles = response.data
        })
        .catch((err) => {
          console.log('API problem', err)
        })
    },
    select(article) {
      this.activeArticle = article
    },
    unselect() {
      this.activeArticle = null
    },
  },
}
</script>

<style lang="scss" scoped></style>
