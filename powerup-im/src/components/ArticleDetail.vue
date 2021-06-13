<template>
  <div v-if="!activeArticle" class="row items-start q-gutter-md">
    <h3>Pick an article from the list.</h3>
  </div>
  <div v-if="activeArticle" class="items-start q-gutter-md">
    <div v-if="!state.edit">
      <div class="row">
        <q-btn
          color="primary"
          icon="edit"
          label="Edit"
          @click="() => (state.edit = true)"
        />
        <q-btn
          color="orange"
          icon="close"
          label="Close"
          @click="() => unselect()"
        />
      </div>
      <div class="row">
        <article-view :article="activeArticle" />
      </div>
    </div>
    <div v-if="state.edit">
      <article-edit
        :article="activeArticle"
        @save-article="handleSaveArticle"
        @cancel-edit="handleCancel"
      />
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
      replace: handler.replace,
    }
  },
  methods: {
    async handleSaveArticle({ draft }) {
      console.log('ArticlePage.handleSaveArticle', draft)
      const resp = await saveArticle(draft)
      this.replace(resp.data)
      console.log('ArticlePage.handleSaveArticle: response', resp.data)
      this.state.edit = false
    },
    handleCancel() {
      this.state.edit = false
    },
  },
}
</script>

<style lang="scss" scoped></style>
