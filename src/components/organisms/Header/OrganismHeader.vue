<script setup>
import MoleculeCard from "../../molecules/Card/MoleculeCard.vue";

defineProps({
  data: {
    type: Object,
    required: true,
  },
});
</script>
<template>
  <header class="header-section">
    <MoleculeCard v-for="film in data" :key="film.id" :film="film" />
  </header>
</template>
<style></style>
