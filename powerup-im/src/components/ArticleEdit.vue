<template>
  <div class="q-pa-md" style="max-width: 400px">
    <q-form class="q-gutter-md" @submit="onSubmit" @reset="onReset">
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
      required: true,
    },
    onSave: {
      type: Function,
      default() {
        console.log('do something with the draft', draft)
      }
    }
  },
  setup(props) {
    return {
      draft: {...props.article}
    }
  },
  methods: {
    onSubmit: function () { onSave() },
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
