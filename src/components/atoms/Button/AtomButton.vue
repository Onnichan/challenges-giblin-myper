<template>
  <button class="button">
    <slot></slot>
  </button>
</template>
<style>
.button {
  border-radius: 4px;
  padding: 0.5em;
}

.button-primary {
  background-color: skyblue;
  color: black;
}

.button-dark {
  background-color: black;
  color: white;
}
</style>
