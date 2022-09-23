<script setup>
import AtomContainer from "../atoms/Container/AtomContainer.vue";

defineProps({
  data: {
    type: Object,
    required: false,
  },
});

// console.log('data',props.data);
</script>
<template>
  <AtomContainer>
    <!-- <img class="film-banner" :src="data.movie_banner" alt=""> -->
    <div class="film-description">
      <div class="film-media">
        <img class="film-media-img" :src="data.image" alt="" />
      </div>
      <div class="film-description-wrapper">
        <h1 class="film-description__title">{{ data.title }}</h1>
        <p class="film-description__paragraph">{{ data.description }}</p>
        <span>Director: {{ data.director }}</span> <br />
        <span>Producer: {{ data.producer }}</span> <br />
        <span>Date: {{ data.release_date }}</span> <br />
        <span>Score: {{ data.rt_score }} points</span> <br />
      </div>
      <div></div>
    </div>
  </AtomContainer>
</template>
<style>
.film-banner {
  display: block;
  width: 100%;
  height: 250px;
  /* object-fit: scale-down; */
}

.film-description {
  display: flex;
  flex-direction: column;
  gap: 5em;
}

.film-media {
  /* width: 40%; */
}

.film-media-img {
  display: block;
  width: 100%;
  border-radius: 4px;
}

.film-description-wrapper {
  /* width: 60%; */
  color: rgba(245, 245, 245, 0.758);
  /* line-height: 2em; */
}

.film-description__title {
  color: white;
  margin-bottom: 2em;
}

@media (min-width: 750px) {
  .film-description {
    flex-direction: row;
  }

  .film-media {
    width: 40%;
  }

  .film-description-wrapper {
    width: 60%;
  }
}
</style>
