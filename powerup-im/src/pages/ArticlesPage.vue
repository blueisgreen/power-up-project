<template>
  <q-page class="q-pa-md">
    <h1>Articles</h1>
    <div class="q-pa-md">
      <q-list bordered separator>
        <q-item
          v-for="article in publishedArticles"
          :key="article.id"
          clickable
          ripple
          @click="() => select(article)"
        >
          <q-item-section>
            <q-item-label>{{ article.headline }}</q-item-label>
            <q-item-label v-if="article.publishedAt" caption>
              By: {{ article.byline ? article.byline : 'anonymous' }}
            </q-item-label>
            <q-item-label v-if="article.publishedAt" caption>
              Published on: {{ date.formatDate(new Date(), 'D MMM YYYY') }}
            </q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </div>
    <hr />
    <article-detail :article="selectedArticle" @close="unselect" />
  </q-page>
</template>

<script>
import { ref, onMounted } from 'vue'
import { date } from 'quasar'
import ArticleDetail from '../components/ArticleDetail.vue'
import { fetchArticles, saveArticle } from '../api/PowerUpService'

const NOT_SELECTED = {}

export default {
  components: { ArticleDetail },
  setup() {
    let articles = ref([])
    let selected = ref(NOT_SELECTED)
    const getArticles = async () => {
      const results = await fetchArticles()
      articles.value = results.data
    }
    onMounted(getArticles)

    return {
      articles,
      selected,
      getArticles
    }
  },
  data() {
    return {
      date,
    }
  },
  computed: {
    publishedArticles() {
      return this.articles.filter((e) => e.publishedAt)
    },
    selectedArticle() {
      return this.selected.value
    }
  },
  methods: {
    select(article) {
      this.selected.value = article
    },
    unselect() {
      this.selected.value = NOT_SELECTED
    },
    handleSave(update) {
      const resp = saveArticle(update)
      this.article = Object.assign({}, this.article, update)
    },
    ping() {
      console.log('ping')
    },
  },
}
</script>

<style lang="scss" scoped></style>
