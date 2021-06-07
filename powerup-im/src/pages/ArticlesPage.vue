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
    <article-detail :article="selected" @close="unselect" />
  </q-page>
</template>

<script>
import { ref } from 'vue'
import { date } from 'quasar'
import { api } from '../boot/axios'
import ArticleDetail from '../components/ArticleDetail.vue'

const NOT_SELECTED = {}

export default {
  components: { ArticleDetail },
  setup() {
    let articles = ref([])
    const getArticles = async () => {
      api
        .get('/articles')
        .then((response) => {
          articles.value = response.data
        })
        .catch((err) => {
          console.log('API problem', err)
        })
    }
    return {
      articles,
      getArticles
    }
  },
  data() {
    return {
      selected: NOT_SELECTED,
      date,
    }
  },
  computed: {
    publishedArticles() {
      return this.articles.filter((e) => e.publishedAt)
    },
  },
  mounted() {
    this.getArticles()
  },
  methods: {
    select(article) {
      this.selected = article
    },
    unselect() {
      this.selected = NOT_SELECTED
    },
    ping() {
      console.log('ping')
    },
  },
}
</script>

<style lang="scss" scoped></style>
