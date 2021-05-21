<template>
  <div class="q-pa-md">
    <div>Title: {{ lessonTitle }}</div>
    <content-block v-for="block in blocks" :key="block.id" :content="block" />
    <content-block :content="videoBlock" />
    <content-block :content="imageBlock" />
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
      blocks: [
        {
          id: 'blargy123',
          type: 'text',
          content: 'Part 1 is first.',
        },
        {
          id: 'blargy123',
          type: 'text',
          content: 'Then part 2.',
        },
        {
          id: 'blargy123',
          type: 'text',
          content: 'Finally part 3. The End',
        },
      ],
      activeSegment: 'aaab',
      videoBlock: {
        id: 'blabba',
        type: 'video',
        video: {
          url: 'https://www.youtube.com/embed/wyrdhWc_gsY?controls=0',
          title: 'Advanced Nuclear Energy',
        },
      },
      imageBlock: {
        id: 'imgblah',
        type: 'image',
        image: {
          url: 'https://cdn.quasar.dev/img/parallax2.jpg',
          alt: 'Nuclear Power Plant',
        },
      },
    }
  },
  computed: {
    ...mapState({
      lessonTitle: (state) => state.draftLesson.title,
    }),
    getContent: (id) => this.$store.getters.getContent(id),
  },
}
</script>

<style lang="scss" scoped></style>
