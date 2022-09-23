<script setup>
import AtomInput from "../../atoms/Input/AtomInput.vue";
</script>
<template>
  <div class="search">
    <AtomInput
      type="search"
      class="search__input"
      placeholder="Ingrese su búsqueda"
    />
  </div>
</template>
<style>
.search {
  padding: 10px;
  border-color: 1px solid black;
  width: 100%;
  height: 60px;
  /* min-height: 60px; */
  /* margin-bottom: 30px; */
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
  padding: 10px 10px 10px 20px;
  width: 100%;
  height: 100%;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  border: 1px solid gray;
  color: black;
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
