<template>
  <div style="max-width: 500px">
    <q-form>
      <div>Lesson</div>
      <q-input v-model="lessonTitle" outlined label="Lesson Title" />
      <hr />
      <div>Lesson Segment</div>
      <q-input
        v-model="newSegment.heading"
        outlined
        label="New Segment Heading"
      />
      <q-btn
        style="background: goldenrod; color: white"
        icon-right="add"
        label="Add Segment"
      />
      <div>.</div>
      <q-select
        v-model="activeSegment"
        outlined
        :options="listSegments"
        label="Segments"
      />
      <hr />
      <div>Content for Active Segment</div>
      <q-select
        v-model="selectedContentType"
        outlined
        :options="contentTypes"
        label="Content Type"
      />
      <q-btn
        style="background: goldenrod; color: white"
        icon-right="add"
        label="Add Content"
      />
    </q-form>
  </div>
  <!-- html content part -->
  <div class="q-pa-md q-gutter-sm">
    <!-- text content part -->
    <standard-editor :doc-name="lessonTitle" />

    <!-- video content part -->
    <q-form>
      <q-input v-model="video.url" outlined label="Video URL" />
    </q-form>

    <!-- image content part -->
    <q-form>
      <q-input v-model="image.url" outlined label="Image URL" />
      <q-input v-model="image.alt" outlined label="Alt text" />
    </q-form>
  </div>
</template>

<script>
import StandardEditor from 'components/StandardEditor.vue'

export default {
  components: { StandardEditor },
  setup() {
  },
  data() {
    return {
      editor: 'Let me tell you about <b>nuclear</b> power plants.',
      newSegment: {
        heading: '',
        content: '',
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
      contentTypes: ['text', 'video', 'image'],
      selectedContentType: '',
      segments: [
        {
          id: 'aaaa',
          heading: 'Overview',
          content:
            'A wide variety of nuclear reactors are in use today, and <em>more</em> are being invented.',
        },
        {
          id: 'aaab',
          heading: 'Molten Salt Reactor (MSR)',
          content:
            'This reactor type relies on liquid sodium to receive and transfer massive amounts of heat energy.',
        },
        {
          id: 'aaac',
          heading: 'Very High-Temperature Reactor (VHTR)',
          content: 'Do not touch this one. You will be in for a nasty burn.',
        },
      ],
    }
  },
  computed: {
    listSegments() {
      const segmentHeadings = this.segments.map((segment) => segment.heading)
      return segmentHeadings
    },
    lessonTitle: {
      get() {
        return this.$store.state.draftLesson.title
      },
      set(value) {
        this.$store.commit('draftLesson/updateTitle', value)
      },
    },
  },
}
</script>

<style lang="scss" scoped></style>
