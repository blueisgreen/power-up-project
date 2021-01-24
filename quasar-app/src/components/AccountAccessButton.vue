<template>
  <div v-if="isLoggedIn" class="q-pa-md q-gutter-md">
    <q-btn color="teal" :to="{ name: 'memberProfile' }">
      <q-icon left size="3em" name="account_circle" />
      <div>Account</div>
    </q-btn>
  </div>
</template>

<script>
export default {
  props: { isLoggedIn: Boolean }
}
</script>

<style></style>
