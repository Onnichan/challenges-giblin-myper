<script setup>
import OrganismGridCard from "../organisms/Grid/OrganismGridCard.vue";
import AtomContainer from "../atoms/Container/AtomContainer.vue";

defineProps({
  data: {
    type: Object,
    required: true,
  },
  notFound: {
    type: Boolean,
    required: false,
    default: false,
  },
});
</script>
<template>
  <main class="main">
    <AtomContainer>
      <div v-if="notFound">No se encontraron resultados</div>
      <OrganismGridCard v-else :data="data"></OrganismGridCard>
    </AtomContainer>
  </main>
</template>
<style></style>
