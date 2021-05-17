<template>
  <rich-content-block v-if="isTextContent" :key="key" />
</template>

<script>
import RichContentBlock from './RichContentBlock.vue'

export default {
  components: { RichContentBlock },
  props: {
    key: {
      type: String,
      default: '',
    },
  },
  computed: {
    isTextContent() {
      return true
      // return this.$store.content.getContent(this.props.key).type === 'text'
    },
  },
}
</script>

<style lang="scss" scoped></style>
