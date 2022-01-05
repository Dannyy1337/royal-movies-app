<template>
  <div class="page" :style="bgStyles">
    <film-page-card
      v-if="selectedFilm"
      :title="selectedFilm.title"
      :genre="selectedFilm.genre"
      :age="selectedFilm.age"
      :description="selectedFilm.description"
      :trailer="selectedFilm.trailer"
      :story="selectedFilm.story"
    />
  </div>
</template>

<script>
import FilmPageCard from "../film/FilmPageCard.vue";
import filmsPage from "../../data/filmsPage";

export default {
  components: { FilmPageCard },
  data() {
    return {
      films: filmsPage,
      selectedFilm: null,
    };
  },
  computed: {
    bgStyles() {
      return {
        "background-image": this.selectedFilm.bg,
        "background-size": "cover",
        "background-attachment": "fixed",
      };
    },
  },
  created() {
    this.handleRouteId(this.$route.params.id);
  },
  methods: {
    handleRouteId(id) {
      this.films.forEach((item) => {
        if (item.id === id) {
          this.selectedFilm = item;
          return;
        }
      });
    },
  },
};
</script>

<style lang='scss' scoped>
.page {
  min-height: 100vh;
  min-width: 100%;
  text-shadow: 1px 1px white;
}
</style>