<template>
  <div class="q-pa-md">
    <div>Title: {{ lessonTitle }}</div>
    <content-block :content="blah" />
    <!-- <q-video :ratio="16 / 9" :src="video.url" />
    <q-img
      :src="image.url"
      :alt="image.alt"
      width="300px"
      crossorigin="anonymous"
    /> -->
  </div>
</template>

<script>
import { mapState } from 'vuex'
import ContentBlock from './lessonViewer/ContentBlock.vue'
export default {
  components: { ContentBlock },
  data() {
    return {
      editor: 'Let me tell you about <b>nuclear</b> power plants.',
      blah: {
        id: 'blargy123',
        type: 'text',
        content: 'Show me!'
      },
      activeSegment: 'aaab',
      video: {
        url: 'https://www.youtube.com/embed/wyrdhWc_gsY?controls=0',
        title: 'Advanced Nuclear Energy',
      },
      image: {
        url: 'https://cdn.quasar.dev/img/parallax2.jpg',
        alt: 'Nuclear Power Plant',
      },
    }
  },
  computed: {
    ...mapState({
      lessonTitle: (state) => state.draftLesson.title,
    }),
    getContent: (id) => this.$store.getters.getContent(id)
  },
}
</script>

<style lang="scss" scoped></style>
