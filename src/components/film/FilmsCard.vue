<template>
  <div class="product-card" :style="bgStyles">
    <div class="blur">
      <h1 class="card-title">{{ film.title }}</h1>
      <div class="content">
        <img class="film-img" :src="film.imgUrl" width="200" height="283" />

        <div class="card-info">
          <h2>{{ film.title }}</h2>
          <p class="count">Цена: {{ film.price }}$</p>
        </div>
        <router-link
          class="page-button"
          :to="{ name: 'filmPage', params: { id: film.id } }"
          tag="button"
          >Перейти к просмотру</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FilmsCard",

  props: {
    film: {
      type: Object,
    },
    films: {
      type: Array,
    },
    price: {
      type: Number,
    },
    imgUrl: String,
    count: {
      type: Number,
      default: 1,
    },
    title: {
      type: String,
    },
    id: Number,
    bg: String,
    genre: Object,
  },
  computed: {
    bgStyles() {
      return {
        "background-image": this.film.bg,
      };
    },
  },
};
</script>

<style lang='scss'>
.product-card {
  margin-top: 20px;
  border: 4px solid white;
  width: 464.96px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding: 30px 0;
  color: white;
  border-radius: 10px !important;
  height: 415.6px;
  flex-wrap: wrap;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  position: static;
  & .blur {
    & .content {
      display: none;
    }
    & h1 {
      display: block;
      -webkit-text-fill-color: white;
      text-shadow: 1px 1px black;
    }
  }
  &:hover {
    display: flex;
    align-items: center;

    & .blur {
      backdrop-filter: blur(5px);
      padding: 5px;
      border-radius: 6px;
      height: 407.6px;
      width: 467.96px;
      margin-top: -31px;
      padding-left: 10px;
      display: flex;
      align-items: center;
      margin-bottom: -31.3px;
      transition: 0.2s ease;
    }
    & .content {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      & .card-info {
        margin-left: 30px;
        margin-top: 20px;
        text-shadow: 1px 1px black;
        max-width: 190px;
        & p {
          margin-top: 20px;
          -webkit-text-fill-color: white;
        }
      }
      & .page-button {
        margin-top: 20px;
        border: 1px solid white !important;
        -webkit-text-fill-color: white;
      }
    }
    h1 {
      display: none;
    }
  }
}
</style>