<template>
  <div>
    <rich-content-block v-if="content.type === 'text'" :content="content.content" />
  </div>
</template>

<script>
import RichContentBlock from './RichContentBlock.vue'

export default {
  components: { RichContentBlock },
  props: {
    content: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped></style>
