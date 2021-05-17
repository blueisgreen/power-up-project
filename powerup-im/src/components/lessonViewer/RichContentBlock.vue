<template>
  <q-card flat bordered>
    <q-card-section v-html="editor" />
  </q-card>
</template>

<script>
import { mapState } from 'vuex'
export default {
  props: {
    key: {
      type: String,
      default: '',
    },
  },
  computed: mapState({
    editor: (state) => {
      state.content.getContent(state, this.param.key)
    },
  }),
}
</script>

<style lang="scss" scoped></style>
