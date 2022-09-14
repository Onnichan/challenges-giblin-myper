<script setup>
const props = defineProps({
  film: {
    type: Object,
    required: true,
  },
});

console.log(props.film);
</script>

<template>
  <div class="card">
    <img :src="props.film.image" alt="image" class="card-image" loading="lazy"/>
    <span>{{props.film.title}}</span>
  </div>
</template>
<style>

.card{
  width: 100%;
}

.card-image{
  display: block;
  width: 100%;
}
</style>
