import Films from "../services/films.service";
import { defineStore } from "pinia";

export const useFilmStore = defineStore("films", {
  state: () => ({
    films: [],
    filmsFiltered: [],
    search: "",
    error: null,
    loading: true,
    notFound: false,
    searching: false,
  }),
  /** This property get thing of state and not mutate the state */
  getters: {
    filterFilms: (state) => {
      return (field) =>
        state.films.filter((film) => {
          return (
            film.image === field ||
            film.title === field ||
            film.director === field ||
            film.release_date === field ||
            film.rt_score === field
          );
        });
    },

    getLengthState: (state) => {
      return state.filmsFiltered.length;
    },
  },
  /** this property mutate the state */
  actions: {
    async getAllFilms() {
      this.films = await Films.getfilms();
      console.log(this.films);
    },

    setLoading(value) {
      this.loading = value;
    },

    setFilmsFiltered() {
      this.filmsFiltered = this.filterFilms();
    },

    setNotFound(value) {
      this.notFound = value;
    },

    setSearching(value) {
      this.searching = value;
    },

    setSearch(value) {
      this.search = value;
    },
  },
});
