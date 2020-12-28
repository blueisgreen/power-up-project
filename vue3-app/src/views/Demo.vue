<template>
  <div class="demo">
    <h1 style="text-align:center">Component Demo</h1>
    <form>
      <BaseInput label="label" v-model="inputValue" />
      <BaseSelect
        label="select"
        v-model="selectValue"
        :options="reactorTypes"
      />
      <BaseCheckbox label="checkbox" v-model="isAwesome" />
      <p class="label-style">radio</p>
      <BaseRadio label="98.5" v-model="station" value="98.5" />
      <BaseRadio label="101.7" v-model="station" value="101.7" />
      <md-button class="md-raised md-primary">Primary</md-button>
    </form>
    <pre>{{ JSON.stringify($data, null, 2) }}</pre>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      reactorTypes: ['A', 'B', 'C', 'D'],
      inputValue: 'input',
      selectValue: '',
      isAwesome: false,
      station: '98.5'
    }
  }
}
</script>

<style>
label {
  margin-right: 1em;
  font-weight: bold;
}
.label-style {
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
