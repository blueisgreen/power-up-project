<template>
  <q-card flat bordered>
    <q-card-section v-html="editor" />
  </q-card>
</template>

<script>
import { mapState } from 'vuex'
export default {
  props: {
    contentKey: {
      type: String,
      default: '',
    },
  },
  computed: mapState({
    editor: (state) => state.content.getContent(this.param.contentKey),
  }),
}
</script>

<style lang="scss" scoped></style>
