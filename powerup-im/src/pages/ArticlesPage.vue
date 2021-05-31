<template>
  <q-page class="q-pa-md">
    <h1>Articles</h1>
    <div v-for="article in articles" :key="article.id" class="row q-gutter-md">
      <span @click="() => selectArticle(article.id)">
        <strong>{{ article.headline }}</strong
        >. Published on
        {{ date.formatDate(article.publishedAt, 'MMM D, YYYY @ H:mm') }}
      </span>
    </div>
    <hr />
    <article-detail :article="activeArticle" :onClose="handleCloseArticle" />
  </q-page>
</template>

<script>
import { ref, onMounted } from 'vue'
import { api } from '../boot/axios'
import { useQuasar } from 'quasar'
import { date } from 'quasar'
import ArticleDetail from '../components/ArticleDetail.vue'

export default {
  components: { ArticleDetail },
  setup() {
    const $q = useQuasar()
    const articles = ref(null)
    const activeArticle = ref(null)
    function loadData() {
      api
        .get('/articles')
        .then((response) => {
          articles.value = response.data
        })
        .catch(() => {
          $q.notify({
            color: 'negative',
            position: 'top',
            messgae: 'Loading failed',
            icon: 'report_problem',
          })
        })
    }
    onMounted(() => loadData())
    return {
      articles,
      activeArticle,
      date,
    }
  },
  methods: {
    selectArticle(id) {
      this.activeArticle = this.articles.find((article) => article.id === id)
    },
    handleCloseArticle() {
      this.activeArticle = null
    }
  },
}
</script>

<style lang="scss" scoped></style>
