<template>
  <q-page class="q-pa-md">
    <h1>Articles</h1>
    <div
      v-for="article in publishedArticles"
      :key="article.id"
      class="row q-gutter-md"
    >
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
import { useQuasar } from 'quasar'
import { date } from 'quasar'
import { reactive } from 'vue'
import ArticleDetail from '../components/ArticleDetail.vue'

export default {
  components: { ArticleDetail },
  setup() {
    let articles = reactive([])
    let activeArticle = reactive(null)
    return {
      articles,
      activeArticle,
      date,
    }
  },
  computed: {
    publishedArticles() {
      console.log('called publishedArticles', this.articles)
      return this.articles.filter((e) => e.publishedAt)
    },
  },
  mounted() {
    this.getArticles()
  },
  methods: {
    getArticles() {
      console.log('called getArticles')
      const $q = useQuasar()
      api
        .get('/articles')
        .then((response) => {
          this.articles = response.data
        })
        .catch(() => {
          $q.notify({
            color: 'negative',
            position: 'top',
            messgae: 'Loading failed',
            icon: 'report_problem',
          })
        })
    },
    select(article) {
      activeArticle = article
    },
    unselect() {
      activeArticle = null
    },
  },
}
</script>

<style lang="scss" scoped></style>
