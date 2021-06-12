<template>
  <q-page class="q-pa-md">
    <h1>Articles</h1>
    <div v-if="!activeArticle" class="q-pa-md">
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
    <article-detail v-if="activeArticle" />
  </q-page>
</template>

<script>
import { onMounted, toRef } from 'vue'
import { date } from 'quasar'
import ArticleDetail from '../components/ArticleDetail.vue'
import useArticleHandler from '../composables/use-article-handler'
import { fetchArticles, saveArticle } from '../api/PowerUpService'

export default {
  components: { ArticleDetail },
  setup() {
    const handler = useArticleHandler()
    const getArticles = async () => {
      const results = await fetchArticles()
      handler.load(results.data)
    }

    onMounted(getArticles)

    return {
      handler,
      date,
    }
  },
  computed: {
    publishedArticles() {
      return this.handler.articles.filter((e) => e.publishedAt)
    },
    activeArticle() {
      console.log('activeArticle', this.handler.activeArticle.value)
      return this.handler.activeArticle.value
    }
  },
  methods: {
    select(article) {
      this.handler.select(article.id)
    },
    unselect() {
      this.handler.unselect()
    },
    handleSaveArticle(update) {
      console.log('saving article', update)
      const resp = saveArticle(update)
    },
    ping() {
      console.log('ping')
    },
  },
}
</script>

<style lang="scss" scoped></style>
