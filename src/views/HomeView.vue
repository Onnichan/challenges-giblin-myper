<script setup>
import TemplateHome from "../components/templates/TemplateHome.vue";
import { onMounted } from "vue";
import { useFilmStore } from "../stores/films.store";

const store = useFilmStore();
const { getAllFilms } = useFilmStore();

onMounted(() => {
  getAllFilms();
  if (store.search.length > 0) {
    store.setSearch("");
  }
});
</script>
<template>
  <span v-if="store.loading">...loading</span>
  <TemplateHome
    v-else
    :data="store.films"
    :notFound="store.notFound"
  ></TemplateHome>
</template>
