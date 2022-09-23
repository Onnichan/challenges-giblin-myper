<script setup>
import TemplateFilm from "../components/templates/TemplateFilm.vue";
import { onBeforeMount } from "vue";
import { useRoute } from "vue-router";
import { useFilmStore } from "../stores/films.store";

// const router = useRouter();
const route = useRoute();
const store = useFilmStore();
const { getFilm } = useFilmStore();

onBeforeMount(() => {
  // router.push(route.params.id);
  getFilm(route.params.id);
  // console.log(route.params.id);
});
</script>
<template>
  <TemplateFilm :data="store.film"></TemplateFilm>
</template>
