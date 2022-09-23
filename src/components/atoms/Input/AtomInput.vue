<script setup>
import { useRouter } from "vue-router";
import { useFilmStore } from "../../../stores/films.store";

const store = useFilmStore();

defineProps({
  type: {
    type: String,
    required: false,
  },
  required: {
    type: Boolean,
    required: false,
  },
  placeholder: {
    type: String,
    require: false,
  },
});

const router = useRouter();

function handleSearch() {
  if (store.search.length > 0) {
    router.push({ path: "/search", query: { query: store.search } });
  }
}
</script>

<template>
  <input
    :type="type"
    class="input"
    :placeholder="placeholder"
    @keyup.enter="handleSearch"
    v-model="store.search"
  />
</template>
<style scoped>
.input {
  padding: 1em;
  border-radius: 4px;
  outline: none;
}
</style>
