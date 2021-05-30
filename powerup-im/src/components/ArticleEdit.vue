<template>
  <div class="q-pa-md" style="max-width: 400px">
    <q-form class="q-gutter-md" @submit="onSubmit" @reset="onReset">
      <q-input
        v-model="headline"
        filled
        label="Make it interesting"
        lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Please type something']"
      />
      <q-input
        v-model="byline"
        filled
        label="Who wrote the article"
        lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Please type something']"
      />
      <q-editor v-model="content" min-height="5rem" />

      <div>
        <q-btn label="Submit" type="submit" color="primary" />
        <q-btn
          label="Reset"
          type="reset"
          color="primary"
          flat
          class="q-ml-sm"
        />
      </div>
    </q-form>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  props: {
    article: {
      type: Object,
      required: true
    },
  },
  setup(props) {
    console.log('ArticleEdit props', props)
    const draftArticle = Object.assign({}, props.article)
    console.log('cloned article', draftArticle)
    return {
      headline: draftArticle.headline,
      byline: draftArticle.byline,
      content: draftArticle.content
    }
  },
  methods: {
    onSubmit: function () {
      console.log(
        'You clicked the Submit button. Right on it...as soon as my programmer tells me what to do with that.', { headline, byline, content }
      )
    },
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
