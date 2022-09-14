<script setup>
defineProps({
  type: {
    type: String,
    required: false,
  },
  required: {
    type: Boolean,
    required: false,
  },
});
</script>

<template>
  <input :type="type" class="input" />
</template>
<style scoped>
.input {
  padding: 1em;
  border-radius: 4px;
  outline: none;
}
</style>
