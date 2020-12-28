<template>
  <div class="profile">
    <h1 style="text-align:center">Member Profile</h1>
    <MemberForm />
  </div>
</template>

<script>
import MemberForm from '../components/MemberForm'

export default {
  components: {
    MemberForm
  }
}
</script>

<style>
label {
  margin-right: 1em;
  font-weight: bold;
}
.button-right {
  margin-left: 1em;
}
button {
  font-size: small;
  font-weight: bold;
  background-color: paleturquoise;
}
</style>
