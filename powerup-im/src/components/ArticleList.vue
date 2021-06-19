<template>
  <q-scroll-area style="height: 400px; max-width: 800px">
    <q-list bordered separator>
      <q-item
        v-for="article in articles"
        :key="article.id"
        clickable
        ripple
        :active="article === selectedArticle"
        active-class="active-highlight"
        @click="() => selectArticle(article)"
      >
        <q-item-section>
          <q-item-label>{{ article.headline }}</q-item-label>
          <q-item-label v-if="article.byline" caption>
            By: {{ article.byline ? article.byline : 'anonymous' }}
          </q-item-label>
          <q-item-label v-if="article.publishedAt" caption>
            Published on {{ date.formatDate(article.publishedAt, timestampFormat) }}
          </q-item-label>
          <q-item-label v-else-if="article.updatedAt !== article.createdAt" caption>
            Updated on {{ date.formatDate(article.updatedAt, timestampFormat) }}
          </q-item-label>
          <q-item-label caption>
            Created on {{ date.formatDate(article.createdAt, timestampFormat) }}
          </q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
  </q-scroll-area>
</template>

<script>
import { date } from 'quasar'
import { emit } from 'vue'

export default {
  props: {
    articles: {
      type: Array,
      required: true,
    },
    selectedArticle: {
      type: Object,
      default: null
    }
  },
  emits: ['select-article'],
  setup(props, { emit }) {
    let selectArticle = (article) => {
      console.log('selected article', article)
      emit('select-article', article)
    }
    return {
      date,
      timestampFormat: 'D-MMM-YYYY @ H:m:s',
      selectArticle
    }
  },
}
</script>

<style scoped>
.activeHighlight {
  background-color: lightsalmon;
}
</style>
