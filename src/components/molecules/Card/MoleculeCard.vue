<script setup>
const props = defineProps({
  film: {
    type: Object,
    required: true,
  },
});

function redirectFilm(){
  
}
</script>

<template>
  <div class="card" @click="redirectFilm">
    <div class="card-content">
      <div class="card-media">
        <img
          :src="props.film.image"
          alt="image"
          class="card-image"
          loading="lazy"
        />
      </div>
      <span class="card-content__director">{{ props.film.director }}</span>
      <span class="card-content__year">{{ props.film.release_date }}</span>
      <span class="card-content__score">{{ props.film.rt_score }} points</span>
    </div>
    <span class="card-title">{{ props.film.title }}</span>
  </div>
</template>
<style>
.card {
  width: 100%;
}

.card:hover {
  cursor: pointer;
}

.card-content {
  position: relative;
  font-size: 0.8rem;
}

.card-image {
  display: block;
  width: 100%;
  border-radius: 4px;
}

.card-content__director,
.card-content__year,
.card-content__score {
  position: absolute;
}

.card-content__director {
  bottom: 10px;
  right: 10px;
}

.card-content__year {
  bottom: 10px;
  left: 10px;
}

.card-content__score {
  top: 10px;
  right: 10px;
}

.card-title {
  /* padding: 20px; */
  margin: 0 auto;
}
</style>
