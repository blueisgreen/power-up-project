<template>
  <q-page class="q-pa-md">
    <h1>Articles</h1>
    <div v-for="article in articles"
        :key="article.id" class="row q-gutter-md">
      <span
        @click="() => selectArticle(article.id)"
      >
        <strong>{{article.headline}}</strong>. Published on {{date.formatDate(article.publishedAt, 'MMM D, YYYY @ H:mm')}}
      </span>
    </div>
    <hr/>
    <div class="row items-start q-gutter-md">
      <q-card
        v-if="activeArticle"
        class="my-card text-white"
        style="background: radial-gradient(circle, #35a2ff 0%, #014a88 100%)"
      >
        <q-card-section>
          <div class="text-h6">{{ activeArticle.headline }}</div>
          <div class="text-subtitle2">by {{ activeArticle.byline }}</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <span v-html="activeArticle.content" />
        </q-card-section>
      </q-card>
    </div>
    <!-- <div class="row items-start q-gutter-md">
      <q-card
        v-for="article in articles"
        :key="article.id"
        class="my-card text-white"
        style="background: radial-gradient(circle, #35a2ff 0%, #014a88 100%)"
      >
        <q-card-section>
          <div class="text-h6">{{ article.headline }}</div>
          <div class="text-subtitle2">by {{ article.byline }}</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <span v-html="article.content" />
        </q-card-section>
      </q-card>
    </div> -->
  </q-page>
</template>

<script>
import { ref, onMounted } from 'vue'
import { api } from '../boot/axios'
import { useQuasar } from 'quasar'
import { date } from 'quasar'

export default {
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
      date
    }
  },
  methods: {
    selectArticle(id) {
      this.activeArticle = this.articles.find(article => article.id === id)
    }
  }
}
</script>

<style lang="scss" scoped>
.my-card {
  width: 75%;
  max-height: 250px;
  overflow-y: scroll;
}
</style>
