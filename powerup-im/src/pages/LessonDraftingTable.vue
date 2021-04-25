<template>
  <q-page>
    <h2>Drafting Table</h2>
    
    <div class="q-pa-md q-gutter-md">
      <div style="max-width: 500px">
        <q-form>
          <q-input v-model="lessonTitle" outlined label="Lesson Title" />
          <hr />
          <q-input
            v-model="newSegment.heading"
            outlined
            label="New Segment Heading"
          />
          <q-btn
            style="background: goldenrod; color: white"
            icon-right="add"
            label="Add"
          />
          <q-select
            v-model="activeSegment"
            outlined
            :options="listSegments"
            label="Segments"
          />
          <hr />
        </q-form>
      </div>
    </div>

    <!-- html lesson part -->
    <div class="q-pa-md q-gutter-sm">
      <q-btn color="primary" icon="save" label="Save Content" />

      <q-editor
        v-model="editor"
        max-height="25rem"
        placeholder="--content goes here--"
        paragraph-tag="p"
        toolbar-push
        dark
        :toolbar="[
          ['left', 'center', 'right', 'justify'],
          ['bold', 'italic', 'strike', 'underline', 'subscript', 'superscript'],
          ['hr', 'link'],
          [
            {
              label: $q.lang.editor.formatting,
              icon: $q.iconSet.editor.formatting,
              list: 'no-icons',
              options: ['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'code'],
            },
            {
              label: $q.lang.editor.fontSize,
              icon: $q.iconSet.editor.fontSize,
              fixedLabel: true,
              fixedIcon: true,
              list: 'no-icons',
              options: [
                'size-1',
                'size-2',
                'size-3',
                'size-4',
                'size-5',
                'size-6',
                'size-7',
              ],
            },
            {
              label: $q.lang.editor.defaultFont,
              icon: $q.iconSet.editor.font,
              fixedIcon: true,
              list: 'no-icons',
              options: [
                'default_font',
                'arial',
                'arial_black',
                'comic_sans',
                'courier_new',
                'impact',
                'lucida_grande',
                'times_new_roman',
                'verdana',
              ],
            },
            'removeFormat',
          ],
          ['quote', 'unordered', 'ordered', 'outdent', 'indent'],
          ['undo', 'redo'],
          ['viewsource'],
        ]"
        :fonts="{
          arial: 'Arial',
          arial_black: 'Arial Black',
          comic_sans: 'Comic Sans MS',
          courier_new: 'Courier New',
          impact: 'Impact',
          lucida_grande: 'Lucida Grande',
          times_new_roman: 'Times New Roman',
          verdana: 'Verdana',
        }"
      />

    </div>

    <!-- video lesson part -->
    <div class="q-pa-md">
      <q-form>
        <q-input v-model="video.videoUrl" outlined label="Video URL" />
      </q-form>
    </div>

    <div class="q-pa-md">
      <h3>Preview: {{ activeSegment }}</h3>
      <q-card flat bordered>
        <q-card-section v-html="editor" />
      </q-card>
      <q-video :ratio="16 / 9" :src="video.videoUrl" />
    </div>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      editor: '',
      lessonTitle: 'Nuclear Reactor Types',
      newSegment: {
        heading: '',
        content: '',
      },
      activeSegment: 'aaab',
      video: {
        videoUrl: 'https://www.youtube.com/embed/wyrdhWc_gsY?controls=0',
        title: 'Advanced Nuclear Energy',
      },
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
  },
}
</script>

<style lang="scss" scoped></style>
