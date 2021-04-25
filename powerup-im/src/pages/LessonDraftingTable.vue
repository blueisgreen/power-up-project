<template>
  <q-page>
    <h2>Drafting Table</h2>
    <div class="q-pa-md">A handy area for putting together lessons.</div>

    <div class="q-pa-md">
      <div class="q-gutter-md" style="max-width: 300px">
        <q-form>
          <q-input v-model="lessonTitle" outlined label="Title" />
          <q-select
            v-model="activePart"
            outlined
            :options="listParts"
            label="Lesson Parts"
          />
        </q-form>
      </div>
    </div>

    <!-- html lesson part -->
    <div class="q-pa-md q-gutter-sm">
      <q-editor
        v-model="editor"
        min-height="5rem"
        placeholder="--content goes here--"
        paragraph-tag="p"
        toolbar-push
        dark
        :toolbar="[
          [
            {
              label: $q.lang.editor.align,
              icon: $q.iconSet.editor.align,
              fixedLabel: true,
              list: 'only-icons',
              options: ['left', 'center', 'right', 'justify'],
            },
          ],
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

      <q-card flat bordered>
        <q-card-section v-html="editor" />
      </q-card>
    </div>

    <!-- video lesson part -->
    <!-- <div class="q-pa-md">
      <q-form>
        <q-input outlined v-model="video.videoUrl" label="Video URL" />
      </q-form>
      <h4>{{ video.title }}</h4>
      <q-video :ratio="16 / 9" :src="video.videoUrl" />
    </div> -->
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      editor: '',
      lessonTitle: 'Nuclear Reactor Types',
      activePart: '',
      video: {
        videoUrl: 'https://www.youtube.com/embed/wyrdhWc_gsY?controls=0',
        title: 'Advanced Nuclear Energy',
      },
      parts: [
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
    listParts() {
      const partHeadings = this.parts.map((part) => part.heading)
      return partHeadings
    },
  },
}
</script>

<style lang="scss" scoped></style>
