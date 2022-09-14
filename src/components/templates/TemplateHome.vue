<script setup>
import OrganismGridCard from '../organisms/Grid/OrganismGridCard.vue';

defineProps({
  data:{
    type: Object,
    required: true
  }
})

</script>
<template>
  <main class="main">
    <div class="container">
      <OrganismGridCard :data="data"></OrganismGridCard>
    </div>
  </main>
</template>
<style>

</style>
