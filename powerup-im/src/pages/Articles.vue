<template>
  <q-page class="q-pa-md">
    <h1>Articles</h1>
    <div v-for="article in articles" :key="article.id" class="row q-gutter-md">
      <span @click="() => selectArticle(article.id)">
        <strong>{{ article.headline }}</strong>. Published on
        {{ date.formatDate(article.publishedAt, 'MMM D, YYYY @ H:mm') }}
      </span>
    </div>
    <hr />
    <div v-if="activeArticle" class="row items-start q-gutter-md">
      <article-view :article="activeArticle" />
      <article-edit :article="activeArticle" />
    </div>
  </q-page>
</template>

<script>
import { ref, onMounted } from 'vue'
import { api } from '../boot/axios'
import { useQuasar } from 'quasar'
import { date } from 'quasar'
import ArticleView from '../components/ArticleView.vue'
import ArticleEdit from '../components/ArticleEdit.vue'

export default {
  components: { ArticleView, ArticleEdit },
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
  },
}
</script>

<style lang="scss" scoped></style>
