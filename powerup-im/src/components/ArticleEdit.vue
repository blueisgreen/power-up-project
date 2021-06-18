<template>
  <div class="q-pa-md" style="max-width: 400px">
    <div class="row">
      <q-btn color="secondary" icon="save" label="Save" @click="saveDraft" />
      <q-btn color="red" icon="cancel" label="Cancel" @click="cancel" />
    </div>
    <div class="row">
      <q-form class="q-gutter-md" @reset="onReset">
        <q-input
          v-model="draft.headline"
          filled
          label="Make it interesting"
          lazy-rules
          :rules="[(val) => (val && val.length > 0) || 'Please type something']"
        />
        <q-input
          v-model="draft.byline"
          filled
          label="Who wrote the article"
          lazy-rules
          :rules="[(val) => (val && val.length > 0) || 'Please type something']"
        />
        <q-editor v-model="draft.content" min-height="5rem" />
      </q-form>
    </div>
    <div class="row">
      <q-btn color="secondary" icon="save" label="Save" @click="saveDraft" />
      <q-btn color="red" icon="cancel" label="Cancel" @click="cancel" />
    </div>
  </div>
</template>

<script>
import { reactive } from 'vue'
import { saveArticle } from '../api/PowerUpService'

export default {
  props: {
    article: {
      type: Object,
      default() {
        return {
          headline: '',
          byline: '',
          content: '',
        }
      },
    },
  },
  emits: ['saveArticle', 'cancelEdit'],
  setup(props, { emit }) {
    const draft = reactive({ ...props.article })
    let saveDraft = () => {
      console.log('ArticleEdit.saveDraft', draft)
      emit('saveArticle', { draft })
    }
    let cancel = () => {
      console.log('ArticleEdit.cancel')
      emit('cancelEdit')
    }
    console.log('draft', draft, 'original', props.article)

    return {
      draft,
      saveDraft,
      cancel,
    }
  },
  methods: {
    onReset: function () {
      console.log('You clicked the Reset button. And...?')
    },
  },
}
</script>

<style lang="scss" scoped>
.my-card {
  width: 75%;
  max-height: 250px;
  overflow-y: scroll;
}
</style>
