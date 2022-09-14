<script setup>
import TemplateHome from "../components/templates/TemplateHome.vue";
import { onBeforeMount } from "vue";
import {} from "pinia";
import { useFilmStore } from "../stores/films.store";

const store = useFilmStore();
const { getAllFilms, setLoading } = useFilmStore();

onBeforeMount(() => {
  getAllFilms();
  setLoading(false);
});
</script>
<template>
  <span v-if="store.loading">...loading</span>
  <TemplateHome v-else :data="store.films"></TemplateHome>
</template>
