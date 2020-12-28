<template>
  <div class="input">
    <input
      type="checkbox"
      :checked="modelValue"
      @change="$emit('update:modelValue', $event.target.checked)"
      class="field"
    />
    <label v-if="label" class="label-right">{{ label }}</label>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: ''
    },
    modelValue: {
      type: Boolean,
      default: false
    }
  }
}
</script>
<style>
.label-right {
  margin-left: 1em;
  font-weight: bold;
}
</style>
