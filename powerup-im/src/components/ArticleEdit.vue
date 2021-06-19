<template>
  <div class="q-pa-md" style="max-width: 400px">
    <div class="row">
      <q-form class="q-gutter-md">
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
  </div>
</template>

<script>
import { reactive } from 'vue'

export default {
  props: {
    article: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const draft = reactive({ ...props.article })
    return {
      draft,
    }
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
