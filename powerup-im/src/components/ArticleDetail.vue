<template>
  <div v-if="!activeArticle" class="row items-start q-gutter-md">
    <h3>Pick an article from the list.</h3>
  </div>
  <div v-if="activeArticle" class="items-start q-gutter-md">
    <div class="row">
      <button :disabled="state.edit" @click="() => (state.edit = true)">
        Edit
      </button>
      <button :disabled="!state.edit" @click="() => (state.edit = false)">
        Save
      </button>
      <button @click="() => unselect()">Close</button>
    </div>
    <div class="row">
      <div v-if="!state.edit" class="col">
        <article-view :article="activeArticle" />
      </div>
      <div v-if="state.edit" class="col">
        <article-edit :article="activeArticle" @save-article="handleSaveArticle" />
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import useArticleHandler from '../composables/use-article-handler'
import ArticleView from '../components/ArticleView.vue'
import ArticleEdit from '../components/ArticleEdit.vue'
import { saveArticle } from '../api/PowerUpService'

export default {
  components: { ArticleView, ArticleEdit },
  setup() {
    const handler = useArticleHandler()
    let state = ref({
      edit: false,
    })
    return {
      activeArticle: handler.activeArticle,
      state,
      unselect: handler.unselect,
      replace: handler.replace
    }
  },
  methods: {
    async handleSaveArticle({ draft }) {
      console.log('ArticlePage.handleSaveArticle', draft)
      const resp = await saveArticle(draft)
      this.replace(resp.data)
      console.log('ArticlePage.handleSaveArticle: response', resp.data)
    },
  }
}
</script>

<style lang="scss" scoped></style>
