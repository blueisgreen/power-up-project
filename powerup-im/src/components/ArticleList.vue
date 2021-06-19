<template>
  <q-scroll-area style="height: 400px; max-width: 800px">
    <q-list bordered separator>
      <q-item
        v-for="article in articles"
        :key="article.id"
        clickable
        ripple
        @click="() => select(article)"
      >
        <q-item-section>
          <q-item-label>{{ article.headline }}</q-item-label>
          <q-item-label v-if="article.byline" caption>
            By: {{ article.byline ? article.byline : 'anonymous' }}
          </q-item-label>
          <q-item-label v-if="article.publishedAt" caption>
            Published on: {{ date.formatDate(new Date(), format) }}
          </q-item-label>
          <q-item-label v-else-if="article.updatedAt !== article.createdAt" caption>
            Updated: {{ date.formatDate(article.updatedAt, format) }}
          </q-item-label>
          <q-item-label caption>
            Created: {{ date.formatDate(article.createdAt, format) }}
          </q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
  </q-scroll-area>
</template>

<script>
import { date } from 'quasar'

export default {
  props: {
    articles: {
      type: Array,
      required: true,
    },
  },
  setup() {
    return {
      date,
      format: 'D-MMM-YYYY H:m:s'
    }
  },
}
</script>

<style scoped></style>
