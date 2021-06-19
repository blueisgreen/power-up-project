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
      this.handler.select(article.id)
      this.state.mode = 'view'
    },
    unselect() {
      this.handler.unselect()
      this.state.mode = 'list'
    },
    newArticle() {
      this.handler.unselect()
      this.handler.startNewDraft()
      this.state.mode = 'new'
    },
    openForEdit(article) {
      this.handler.startEdit(this.activeArticle)
      this.state.mode = 'edit'
    },
    async saveDraft() {
      let resp
      if (this.state.mode === 'new') {
        resp = await createArticle(this.draftArctile)
        this.state.mode = 'edit'
      } else if (this.state.mode === 'edit') {
        resp = await saveArticle(this.draftArticle)
      } else {
        console.warn('Not sure why saveDraft was called. Ignoring.')
        return
      }
      this.handler.replaceOrAdd(resp.data)
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
