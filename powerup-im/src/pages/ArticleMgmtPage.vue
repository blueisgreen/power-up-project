<template>
  <q-page class="q-pa-md">
    <h1>Article Management</h1>
    <article-action-bar
      :mode="mode"
      @start-new-article="newArticle"
      @open-for-edit="openActiveForEdit"
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
    <article-view v-if="mode === 'view'" :article="activeArticle" />
    <article-edit v-if="mode === 'edit' || mode === 'new'" />
  </q-page>
</template>

<script>
import { onMounted, ref } from 'vue'
import ArticleActionBar from '../components/ArticleActionBar.vue'
import ArticleList from '../components/ArticleList.vue'
import ArticleView from '../components/ArticleView.vue'
import ArticleEdit from '../components/ArticleEdit.vue'
import useArticleHandler from '../composables/use-article-handler'
import {
  fetchArticles,
  createArticle,
  saveArticle,
} from '../api/PowerUpService'

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
    draftArticle() {
      return this.handler.draft.value
    },
    mode() {
      return this.state.mode
    },
  },
  methods: {
    select(article) {
      console.log('select', article)
      this.handler.select(article.id)
      this.state.mode = 'view'
    },
    unselect() {
      console.log('unselect')
      this.handler.unselect()
      this.state.mode = 'list'
    },
    newArticle() {
      console.log('newArticle')
      this.handler.unselect()
      this.handler.startNewDraft()
      this.state.mode = 'new'
    },
    openActiveForEdit() {
      console.log('openActiveForEdit')
      this.handler.startEdit(this.activeArticle)
      this.state.mode = 'edit'
    },
    openForEdit(article) {
      console.log('openForEdit', article)
      this.select(article)
      this.openActiveForEdit()
    },
    async saveDraft() {
      let resp
      if (this.state.mode === 'new') {
        console.log('saving as new article', this.draftArticle)
        resp = await createArticle(this.draftArticle)
        this.state.mode = 'edit'
      } else if (this.state.mode === 'edit') {
        console.log('saving changes', this.draftArticle)
        resp = await saveArticle(this.draftArticle)
      } else {
        console.warn('Not sure why saveDraft was called. Ignoring.')
        return
      }
      console.log('here is what came back', resp.data)
      this.handler.replaceOrAdd(resp.data)
      this.handler.select(resp.data.id)
      this.state.mode = 'edit'
    },
    cancelUnsavedEdits() {
      console.log('cancelUnsavedEdits')
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
