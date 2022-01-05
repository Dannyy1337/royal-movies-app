<template>
  <div class="root">
    <div class="wrapper" :style="bgStyles">
      <small>[ ROYAL MOVIES ]</small>
      <h1>Онлайн кинотеатр</h1>
      <p>
        Смотри новинки и классическое кино, без маски, только на “Royal Movies”.
      </p>
      <button type="button" @click="$router.push({ name: 'films' })">
        Перейти к фильмам
      </button>

      <span class="scroll-btn">
        <a href="#info">
          <span class="material-icons"> keyboard_arrow_down </span>
        </a>
      </span>
    </div>
    <div class="info" id="info">
      <div class="info-tv-area">
        <div class="text-area">
          <h1>
            Смотри на<br />
            любимом девайсе
          </h1>
          <div class="parag-area">
            <p>
              Отличная совместимость со всеми видами мониторов и телевизоров.
            </p>
            <br />
            <p>Твоё любимое кино, в найвысшем разрешении.</p>
          </div>
        </div>
        <div class="img-area-tv">
          <img class="tv-img" src="./img/info/tv_img.png" alt="" />
        </div>
      </div>
      <div class="info-tablet-area">
        <div class="text-area">
          <h1>
            Отлично подходит<br />
            для смартфонов<br />
            и планшетов
          </h1>
          <div class="parag-area">
            <p>Улучшенная адаптация для мобильных экранов.</p>
            <br />
            <p>Полноценный доступ ко всем типам разрешений.</p>
          </div>
        </div>
        <div class="img-area-tablet">
          <img class="tablet-img" src="./img/info/smart.png" alt="" />
        </div>
      </div>
    </div>
    <my-footer />
  </div>
</template>

<script>
import MyFooter from "./MyFooter.vue";

export default {
  components: { MyFooter },
  data() {
    return {
      bgs: [
        `url('https://i.yapx.ru/PHngf.png')`,
        `url('https://i.yapx.ru/PHqwj.png')`,
        `url('https://i.yapx.ru/PHqwo.png')`,
        `url('https://i.yapx.ru/PHqwz.png')`,
        `url('https://i.yapx.ru/PHqw1.png')`,
        `url('https://i.yapx.ru/PHqw6.png')`,
        `url('https://i.yapx.ru/PHqw8.png')`,
        `url('https://i.yapx.ru/PHqyC.png')`,
      ],
      selectedBg: null,
    };
  },
  methods: {
    randomItem(items) {
      return items[Math.floor(Math.random() * items.length)];
    },
  },
  created() {
    this.selectedBg = this.randomItem(this.bgs);
  },
  computed: {
    bgStyles() {
      return {
        "background-image": this.selectedBg,
      };
    },
  },
};
</script>


<style lang='scss'>
@import "../sass/nullstyle.scss";
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@500;800&display=swap");
@import "../sass/adaptive.scss";

::-webkit-scrollbar {
  width: 0;
}

.scroll-btn {
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 5px;
  position: absolute;
  top: 95%;
  & a {
    color: rgba(255, 255, 255, 0.418);
    &:hover {
      color: white;
    }
  }
  &:hover {
    border: 1px solid #dbdbdb;
    background-color: white;
    transition: 0.7s ease;
    opacity: 0.4;
    background: rgba(128, 128, 128, 0);
  }
}

.root {
  min-width: 100%;
  min-height: 100vh;
}

.info {
  min-height: 100vh;
  background: url("./img/bg.png") no-repeat;
  background-size: cover;
  background-attachment: fixed;
  font-family: "Montserrat", sans-serif !important;
  &-tv-area {
    font-size: 40px !important;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    align-items: center;

    min-height: 85vh;
    & .text-area {
      padding: 70px 30px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: space-evenly;
      padding-bottom: 0;
      max-width: 100%;
      & h1 {
        margin-top: -40px;
      }
    }
    & .img-area-tv {
      max-width: 100%;
      min-height: 10vh;
      display: flex;
      align-items: flex-end;
      padding-top: 40px;

      & .tv-img {
        width: 500px;
      }
    }
  }
  &-tablet-area {
    font-size: 40px !important;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    align-items: center;
    min-height: 85vh;
    padding-bottom: 70px;
    & .text-area {
      padding: 0 30px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: space-evenly;
      max-width: 100%;
    }

    & .img-area-tablet {
      max-width: 100%;
      display: flex;
      align-items: center;
      height: 350px;

      & img {
        width: 500px;
      }
    }
  }
}

button {
  color: white;
  font-size: 16px;
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0.32) 0%,
    rgba(255, 255, 255, 0.48) 50%,
    rgba(255, 255, 255, 0.32) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  padding: 16px 32px;
  min-width: 200px;
  min-height: 52px;
  border: 1px solid rgba(255, 255, 255, 0.08) !important;
  border-radius: 10px !important;

  &:hover {
    color: white;
    border: 2px solid #dbdbdb;
    background-color: white;
    transition: 0.7s ease;
    opacity: 0.4;
  }
}

.wrapper {
  min-height: 100vh;
  height: 100%;
  width: 100%;
  font-family: "Montserrat", sans-serif !important;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background: black;
  background-size: cover;
  background-attachment: fixed;
  background-repeat: no-repeat;
}

h1 {
  font-size: 57.33px;
  line-height: 73.38px;
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0.48) 0%,
    rgba(255, 255, 255, 0.9) 50%,
    rgba(255, 255, 255, 0.48) 100%
  );
  display: inline-block;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: 0 8px;
}
small {
  color: white;
  font-size: 11.11px;
  letter-spacing: 0.15em;
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0.16) 0%,
    rgba(255, 255, 255, 0.24) 50%,
    rgba(255, 255, 255, 0.16) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

p {
  font-size: 16px;
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0.32) 0%,
    rgba(255, 255, 255, 0.48) 50%,
    rgba(255, 255, 255, 0.32) 100%
  );
  display: inline-block;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 32px;
}
</style>