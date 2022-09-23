<script setup>
import TemplateSearchFilm from "../components/templates/TemplateSearchFilm.vue";
import { computed } from "vue";
import { useRoute } from "vue-router";
import { useFilmStore } from "../stores/films.store";

const route = useRoute();
const { filterFilms } = useFilmStore();

const filteredFilms = computed(() => {
  console.log("computed");
  console.log(route.query.query);
  return filterFilms(route.query.query);
});
</script>
<template>
  <TemplateSearchFilm :data="filteredFilms"></TemplateSearchFilm>
</template>
