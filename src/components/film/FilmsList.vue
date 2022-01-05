<template>
  <div class="product-list">
    <div class="header-section">
      <h2>
        <span class="orange"> Рекомендуем</span><br />
        к просмотру:
      </h2>
      <div class="caroseul">
        <caroseul :caroseul_data="sliderItems" :intervals="10000" />
      </div>
    </div>
    <div class="main-content">
      <div class="title-area">
        <h2><span class="orange"> Доступные </span> фильмы для просмотра</h2>
        <div class="search-area">
          <label class="input-area">
            <input
              v-model="searchValue"
              placeholder="Введите название..."
              type="search"
              class="search"
              :class="{ active: isActive }"
            />
          </label>
          <button
            class="open-click"
            @click="
              isActive = !isActive;
              show = !show;
            "
          >
            <i class="material-icons">{{ changeText }}</i>
          </button>
        </div>
      </div>
      <ul class="list-default">
        <li v-for="film in searchHandlerFilms" :key="film.id">
          <films-card :genre="genre" :film="film" :style="bgStyles">
          </films-card>
        </li>
      </ul>
    </div>
    <my-footer />
  </div>
</template>

<script>
import { sliderItems } from "../../data/sliderItems";
import FilmsCard from "./FilmsCard.vue";
import Caroseul from "./Carousel.vue";
import { films } from "../../data/filmsCard";
import MyFooter from "./MyFooter.vue";

export default {
  components: { FilmsCard, Caroseul, MyFooter },
  data() {
    return {
      isActive: false,
      show: false,
      films: films,
      sortedFilms: [],
      searchValue: "",
      sliderItems: sliderItems,
    };
  },
  created() {
    console.log(this.films);
  },
  computed: {
    searchHandlerFilms() {
      return this.films.filter((elem) => {
        return elem.title.toLowerCase().includes(this.searchValue);
      });
    },
    changeText() {
      return this.show ? "search_off" : "search";
    },
  },

  methods: {},
};
</script>

<style lang='scss'>
.search {
  max-height: 0;
  transition: max-height 0.2s ease-out;
  overflow: hidden;
  border: none;
}

.active {
  max-height: 50px;
  overflow: visible !important;
  border-bottom: 2px solid white;
  border-radius: 6%;
}

.header-section {
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 100%;
  min-height: 130px;
  flex-wrap: wrap;
  padding: 40px;
  background: url("../../assets/head_bg.png") no-repeat;
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  margin-top: -5px;
  & .caroseul {
    border: 1px solid #1f1f1f;
    border-radius: 10px;
    margin-right: 0px;
    background: #1f1f1f;
  }
  & h2 {
    color: white;
    font-size: 50px;
    margin-left: 30px;
  }
}

li {
  display: inline-block;
  margin: 10px;
}

.product-list {
  position: inherit;
  margin: 0;
  padding: 65px 0px;
  padding-bottom: 0;
  min-height: 100vh;
  height: 100%;
  width: 100%;
  font-family: Arial, Helvetica, sans-serif !important;
  background: url("./img/bg.png");
  background-size: cover;
  background-attachment: fixed;
  & label {
    margin-left: 55px;
    & input {
      background: transparent;
    }
  }
  & h1 {
    color: white;
  }
}

.open-click {
  margin-left: 10px;
  min-width: 100px;
  text-align: center;
}

button {
  border: 2px solid white;
  border-radius: 6%;
  padding: 0.5%;
  width: 100px;
  color: white;
  background-color: Transparent;
  background-repeat: no-repeat;
  cursor: pointer;
  overflow: hidden;
  &:hover {
    color: black;
    border: 2px solid #dbdbdb;
    background-color: white;
    border-radius: 6%;
  }
}

.title-area {
  display: flex;
  justify-content: space-around;
  margin-top: 100px;
  margin-bottom: 40px;
  & h2 {
    color: white;
    font-size: 30px;
  }
}

.search-area {
  margin-left: -50px;
  min-height: 40px;
  display: flex;
  align-items: center;
  & input {
    border-radius: 10px;
    color: white;
    padding: 0 6.5px;
    font-size: 20px !important;
  }

  & .open-click {
    min-width: 20px;
    width: 40px;
    min-height: 40px;
  }
}
.list-default {
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  margin-left: 30px;
}
.orange {
  color: orange;
}

.main-content {
  min-width: 100%;
  padding-bottom: 50px;
  margin-top: -40px;
}
</style>