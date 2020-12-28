<template>
  <div class="demo">
    <h1 style="text-align:center">Demo of Components for Power Up!</h1>
    <MemberForm />
  </div>
</template>

<script>
import MemberForm from '../components/MemberForm'

export default {
  components: {
    MemberForm
  },
  data: function() {
    return {
      reactorTypes: ['VHTR', 'GFR', 'SFR', 'LFR', 'MSR', 'SCWR']
    }
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
