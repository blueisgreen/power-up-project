<template>
  <h1>Lessons</h1>
  <div v-for="unit in course" :key="unit.unit">
    <div class="unit-header">Unit: {{ unit.unit }}</div>
    <ul>
      <li v-for="lesson in unit.lessons" :key="lesson.title">
        {{ lesson.title }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      course: [
        {
          unit: 'Fission',
          lessons: [
            { title: 'Why Atoms Split' },
            { title: 'Fission Math' },
            { title: 'Chain Reactions' },
            { title: 'Controlling Neutrons' },
            { title: 'Properties of Isotopes' },
          ],
        },
        {
          unit: 'Radiation',
          lessons: [
            { title: 'Radiation is Everywhere' },
            { title: 'The Right Dose for the Job' },
            { title: 'Effects on Materials' },
          ],
        },
        {
          unit: 'Controlled Nuclear Reactions',
          lessons: [
            { title: 'Building Bombs' },
            { title: 'Generating Power' },
            { title: 'Medical Treatment' },
            { title: 'Scientific and Medical Breakthroughs' },
          ],
        },
        {
          unit: 'Generation IV Nuclear Power',
          lessons: [
            { title: 'Stable, Safe, Clean Power Production' },
            { title: 'Types of Gen IV Nuclear Reactors' },
            { title: 'They Can Almost Fit in Your Pocket (SMRs)' },
            { title: 'Safety Factors' },
            { title: 'What About Accidents?' },
          ],
        },
        {
          unit: 'Famous Nuclear Accidents',
          lessons: [
            { title: '9 Mile Island' },
            { title: 'Chernobyl' },
            { title: 'Fukushima' },
          ],
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
h1 {
  font-size: xx-large;
  font-weight: bold;
  margin: 0;
}
.unit-header {
  font-size: large;
  font-weight: bold;
  color: yellow;
  background-color: slategray;
  padding-left: 1em;
}
</style>
