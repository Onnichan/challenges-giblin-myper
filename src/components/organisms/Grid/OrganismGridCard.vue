<script setup>
import MoleculeCard from "../../molecules/Card/MoleculeCard.vue";
import AtomContainer from "../../atoms/Container/AtomContainer.vue";

const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
});
</script>
<template>
  <section class="grid-section">
    <AtomContainer>
      <div class="grid">
        <MoleculeCard v-for="film in props.data" :key="film.id" :film="film"/>
      </div>
    </AtomContainer>
  </section>
</template>
<style>

  .grid{
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2em;
  }
</style>
