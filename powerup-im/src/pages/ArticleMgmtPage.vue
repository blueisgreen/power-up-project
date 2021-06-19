<template>
  <q-page class="q-pa-md">
    <h1>Article Management</h1>
    <article-action-bar
      :mode="mode"
      @start-new-article="newArticle"
      @open-for-edit="openForEdit"
      @save-draft="saveDraft"
      @cancel-draft="cancelUnsavedEdits"
      @close-article="unselect"
    />
    <!--
      'start-new-article',
      'select-for-edit',
      'save-draft',
      'cancel-draft',
      'close-article',
    -->
    <article-list
      v-if="mode === 'list'"
      :articles="allArticles"
      :selected-article="activeArticle"
      @select-article="select"
      @open-for-edit="openForEdit"
    />
    <article-view v-else-if="mode === 'view'" :article="activeArticle" />
    <article-edit v-else-if="mode === 'edit'" :article="activeArticle" />
    <article-edit v-else-if="mode === 'new'" />
  </q-page>
</template>

<script>
import { onMounted, ref } from 'vue'
import ArticleActionBar from '../components/ArticleActionBar.vue'
import ArticleList from '../components/ArticleList.vue'
import ArticleView from '../components/ArticleView.vue'
import ArticleEdit from '../components/ArticleEdit.vue'
import useArticleHandler from '../composables/use-article-handler'
import { fetchArticles, saveArticle } from '../api/PowerUpService'

export default {
  components: { ArticleActionBar, ArticleList, ArticleView, ArticleEdit },
  setup() {
    const handler = useArticleHandler()
    const getArticles = async () => {
      const results = await fetchArticles()
      handler.load(results.data)
    }
    let state = ref({
      mode: 'list', // 'view' 'edit' 'new'
    })

    onMounted(getArticles)

    return {
      handler,
      state,
    }
  },
  computed: {
    allArticles() {
      return this.handler.articles
    },
    activeArticle() {
      console.log('activeArticle', this.handler.activeArticle.value)
      return this.handler.activeArticle.value
    },
    mode() {
      return this.state.mode
    },
  },
  methods: {
    select(article) {
      console.log('handling select-article event')
      this.handler.select(article.id)
      this.state.mode = 'view'
    },
    unselect() {
      this.handler.unselect()
      this.state.mode = 'list'
    },
    newArticle() {
      console.log('addArticle')
      this.handler.unselect()
      this.handler.startNewDraft
      this.state.mode = 'new'
    },
    openForEdit(article) {
      const toOpen = article ? article : this.activeArticle
      this.handler.select(toOpen.id)
      this.state.mode = 'edit'
    },
    async saveDraft() {
      console.log('IMPLEMENT ME! saveDraft')
      // await this.handleSaveArticle(this.handler.draft)
    },
    async handleSaveArticle(draft) {
      console.log('ArticlePage.handleSaveArticle', draft)
      const resp = await saveArticle(draft)
      this.replace(resp.data)
      console.log('ArticlePage.handleSaveArticle: response', resp.data)
      this.state.edit = false
    },
    cancelUnsavedEdits() {
      this.handler.clearDraft()
      if (!this.activeArticle) {
        this.state.mode = 'list'
      } else {
        this.state.mode = 'view'
      }
    },
  },
}
</script>

<style lang="scss" scoped></style>
