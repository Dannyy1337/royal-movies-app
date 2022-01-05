<template>
  <div class="film-page" :style="{ background: bg }">
    <div class="main">
      <h2>Фильм {{ title }} смотреть онлайн</h2>
      <p>Жанр: {{ genre }}</p>
      <p>Возрастное ограничение: {{ age }}</p>
      <div class="first-sector">
        <section>
          <iframe
            
            :src="trailer"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </section>
      </div>
    </div>

    <div class="second-sector">
      <div class="first-floor">
        <h2>Описание:</h2>
        <p>{{ description }}</p>
      </div>
      <div class="second-floor">
        <h2>Сюжет:</h2>
        <p>{{ story }}</p>
      </div>
    </div>
    <my-footer />
  </div>
</template>

<script>
import MyFooter from './MyFooter.vue';
export default {
  components: { MyFooter },
  name: "FilmPageCard",
  props: {
    title: {
      type: String,
    },
    genre: {
      type: String,
    },
    age: {
      type: String,
    },
    description: {
      type: String,
    },
    bg: {
      type: String,
    },
    id: Number,
    trailer: String,
    story: String,
  },
};
</script>

<style lang='scss'>
$ff: Arial, Helvetica, sans-serif;

.film-page {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  font-family: $ff;
  min-height: 100vh;
  & .second-sector {
    font-size: 20px;
    padding: 30px;
    & .first-floor {
      & h2 {
        color: white;
        text-shadow: none;
        margin-bottom: 30px;
      }
    }
    & .second-floor {
      margin-top: 60px;
      & h2 {
        color: white;
        text-shadow: none;
        margin-bottom: 30px;
      }
    }
  }
  & h3{
    text-shadow: none;
  }
}

.main {
  width: 100%;
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-top: 70px;
  & h2 {
    color: white;
    text-shadow: none;
    font-size: 40px;
  }
  & section {
    min-width: 100%;
    min-height: 60vh;
    display: flex;
    justify-content: center;
    & iframe {
      border: 2px solid grey;
      border-radius: 10px;
      width: 980px;
    }
  }
}
</style>