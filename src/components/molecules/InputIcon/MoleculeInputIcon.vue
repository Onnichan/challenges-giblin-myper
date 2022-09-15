<script setup>
import { useFilmStore } from "../../../stores/films.store";
import { ref, watch } from "vue";

const search = ref("");
// const store = useFilmStore();
const { setFilmsFiltered, setNotFound, setSearching, filterFilms} =
  useFilmStore();

// function handleChange(){
//   if(search.value.length === 0){
//     handleSearch();
//   }
// }

watch(search, (newSearch, oldSearch) => {
  if(newSearch.length === 0){
    handleSearch();
  }
})

function handleSearch() {
  if (!search.value) {
    setFilmsFiltered([]);
    setNotFound(false);
    console.log("aqui en el search");
  } else {
    console.log("aqui en el search");    
    setNotFound(false);
    setSearching(true);
    console.log("aqui en el target");
    if (!filterFilms()) {
      setNotFound(true);
    } else {
      setFilmsFiltered();
    }
    setSearching(false);
  }
}
</script>
<template>
  <div class="input-icon">
    <!-- <slot></slot>
  </div> -->
    <div class="search">
      <input
        type="search"
        class="search__input"
        @keyup.enter="handleSearch"
        v-model="search"
      />
    </div>
  </div>
</template>
<style>
.search {
  padding: 10px;
  border-color: 1px solid black;
  width: 100%;
  height: 60px;
  /* min-height: 60px; */
  margin-bottom: 30px;
  display: flex;
}
.search__wrapper {
  /* display: inline-block; */
  width: 90%;
  height: 100%;
  position: relative;
}
.search__input {
  outline: none;
  padding: 10px 10px 10px 40px;
  width: 100%;
  height: 100%;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  border: 1px solid gray;
  color: lightseagreen;
}
.search__input:focus {
  border: 1px solid black;
}
.search__input::placeholder {
  color: lightseagreen;
  font-weight: 700;
}
.search__icon {
  position: absolute;
  left: 10px;
  top: 25%;
  bottom: 25%;
  height: 50%;
}
.search__button {
  display: block;
  width: 10%;
  height: 100%;
  background-color: black;
  border: 1px solid transparent;
  font-weight: 700;
  color: white;
}
.search__button:hover {
  cursor: pointer;
}
</style>
