<template>
  <div class="q-pa-md">
    <div class="q-gutter-md" style="max-width: 300px">
      <q-input v-model="text" label="Screen Name" outlined />
    </div>
  </div>
</template>

<script>
export default {
  name: 'MemberProfileForm',
  data() {
    return {
      text: 'Zanzibar',
    }
  },
}
</script>
