<script setup>
import TemplateSearchFilm from "../components/templates/TemplateSearchFilm.vue";
import {
  computed,
  onBeforeMount,
  onBeforeUpdate,
  onMounted,
  onUnmounted,
  onUpdated,
  ref,
  watch,
} from "vue";
import { useRoute } from "vue-router";
import { useFilmStore } from "../stores/films.store";
import router from "../router";

const search = ref([]);
const route = useRoute();
const { filterFilms } = useFilmStore();

// onMounted(() => {
//   console.log("Before mount", route.query.query);
//   search.value = filterFilms("Ponyo");
//   console.log("Before mount", search.value);
// });

// onUnmounted(() => {
//   console.log('unmounted');
// })

// watch(route.query.query, (newSearch, oldSearch) => {
//   console.log("updated");
//   newSearch = filterFilms(route.query.query);
// });

const filteredFilms = computed(() => {
  console.log("computed");
  console.log(route.query.query);
  // if (router.query.query) {
  return filterFilms(route.query.query);
});
</script>
<template>
  <TemplateSearchFilm :data="filteredFilms"></TemplateSearchFilm>
</template>
