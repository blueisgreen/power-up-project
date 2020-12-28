<template>
  <div class="admin">
    <h1 style="text-align:center">Administration</h1>
    <h2>{{ message }}</h2>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      message: 'Bah!!'
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
