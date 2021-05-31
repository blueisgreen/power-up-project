<template>
  <div v-if="lodash.isEmpty(article)" class="row items-start q-gutter-md">
    <h3>Pick an article from the list.</h3>
  </div>
  <div v-if="!lodash.isEmpty(article)" class="items-start q-gutter-md">
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
import lodash from 'lodash'
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
      lodash,
      state,
    }
  },
}
</script>

<style lang="scss" scoped></style>
