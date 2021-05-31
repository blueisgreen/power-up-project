<template>
  <div v-if="_.isEmpty(article)" class="row items-start q-gutter-md">
    <h3>Pick an article from the list.</h3>
  </div>
  <div v-if="!_.isEmpty(article)" class="items-start q-gutter-md">
    <div class="row">
      <button :disabled="state.edit" @click="() => (state.edit = true)">
        Edit
      </button>
      <button :disabled="!state.edit" @click="() => (state.edit = false)">
        Save
      </button>
      <button @click="onClose">Close</button>
    </div>
    <div class="row">
      <div v-if="!state.edit" class="col">
        <article-view :article="article" />
      </div>
      <div v-if="state.edit" class="col">
        <article-edit :article="article" />
      </div>
    </div>
  </div>
</template>

<script>
import _ from 'lodash'
import { ref } from 'vue'
import ArticleView from '../components/ArticleView.vue'
import ArticleEdit from '../components/ArticleEdit.vue'

export default {
  components: { ArticleView, ArticleEdit },
  props: {
    article: {
      type: Object,
      default: function () {
        return {}
      },
    },
    onClose: {
      type: Function,
      default: function () {
        console.log('Close action')
      },
    },
  },
  setup() {
    let state = ref({
      edit: false,
    })
    return {
      _,
      state,
    }
  },
}
</script>

<style lang="scss" scoped></style>
