<script setup>
import TemplateHome from "../components/templates/TemplateHome.vue";
import { onMounted } from "vue";
import { useFilmStore } from "../stores/films.store";

const store = useFilmStore();
const { getAllFilms } = useFilmStore();

onMounted(() => {
  if (!store.searching) {
    getAllFilms();
  }
});

function filtered(){
  return store.filmsFiltered.length > 0 ? store.filmsFiltered : store.films;
}

</script>
<template>
  <!-- <span v-if="store.loading">...loading</span> -->
  <TemplateHome :data="filtered()" :notFound="store.notFound"></TemplateHome>
</template>
