<template>
  <q-page>
    <h2>Drafting Table</h2>
    <div>A handy area for putting together lessons.</div>

    <div class="q-pa-md">
      <div class="q-gutter-md" style="max-width: 300px">
        <q-form> <q-input outlined v-model="lessonTitle" label="Title" /></q-form>
        <q-select outlined v-model="activePart" :options="listParts" label="Lesson Parts" />
      </div>
    </div>

    <div class="q-pa-md q-gutter-sm">
      <q-editor v-model="editor" min-height="5rem" />

      <q-card flat bordered>
        <q-card-section>
          <pre style="white-space: pre-line">{{ editor }}</pre>
        </q-card-section>
      </q-card>

      <q-card flat bordered>
        <q-card-section v-html="editor" />
      </q-card>
    </div>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      editor: 'What you see is <b>what</b> you get.',
      lessonTitle: 'Nuclear Reactor Types',
      activePart: '',
      parts: [
        { id: 'aaaa', heading: 'Overview', content: 'A wide variety of nuclear reactors are in use today, and <em>more</em> are being invented.' },
        { id: 'aaab', heading: 'Molten Salt Reactor (MSR)', content: 'This reactor type relies on liquid sodium to receive and transfer massive amounts of heat energy.' },
        { id: 'aaac', heading: 'Very High-Temperature Reactor (VHTR)', content: 'Do not touch this one. You will be in for a nasty burn.' },
      ]
    }
  },
  computed: {
    listParts() {
      const partHeadings = this.parts.map(part => part.heading)
      return partHeadings
    }
  }

}
</script>

<style lang="scss" scoped></style>
