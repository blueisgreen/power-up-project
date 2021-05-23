<template>
  <q-page>
    <div class="pu-header">&mdash; Drafting Table &mdash;</div>
    <div class="q-pa-md q-gutter-md">
      <q-card>
        <q-tabs v-model="tab">
          <q-tab name="lessons" label="Lessons" />
          <q-tab name="editor" label="Content" />
          <q-tab name="preview" label="Preview" />
        </q-tabs>

        <q-separator />

        <q-tab-panels v-model="tab">
          <q-tab-panel name="lessons">
            <course-structure />
          </q-tab-panel>
          <q-tab-panel name="editor">
            <lesson-editor />
          </q-tab-panel>
          <q-tab-panel name="preview">
            <lesson-preview />
          </q-tab-panel>
        </q-tab-panels>
      </q-card>
    </div>

    <!-- preview -->
  </q-page>
</template>

<script>
import CourseStructure from 'components/CourseStructure.vue'
import LessonEditor from 'components/LessonEditor.vue'
import LessonPreview from 'components/LessonPreview.vue'
import { ref } from 'vue'

export default {
  components: { CourseStructure, LessonEditor, LessonPreview },
  setup() {
    return {
      tab: ref('lessons'),
    }
  },
}
</script>

<style lang="scss" scoped>
.pu-header {
  font-weight: bold;
  font-size: xx-large;
  font-style: italic;
  color: darkorchid;
  text-align: center;
}
</style>
