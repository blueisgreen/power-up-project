<template>
  <div v-if="isVisible" class="q-pa-md q-gutter-sm">
    <q-btn color="primary" icon="login" label="Sign In / Join" />
  </div>
</template>

<script>
export default {
  props: { isVisible: Boolean }
}
</script>

<style></style>
