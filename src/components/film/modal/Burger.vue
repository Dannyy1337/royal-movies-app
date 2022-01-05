<template>
  <div class="burger">
    <modal-window :show="show" @close="show = !show" v-show="show" />

    <a href="/" class="logo">
      <img class="logo" src="https://i.yapx.ru/PNrOE.png" />
    </a>
    <nav>
      <i class="material-icons menu-i" v-if="!menu" @click="menu = !menu">menu</i>
      <i class="material-icons menu-i" v-else @click="menu = !menu">clear</i>

      <ul v-if="menu">
        <li><a href="/all-films">Все фильмы</a></li>
        <li><a href="/timetable">Премьеры</a></li>
        <li>
          <a href="#" class="show-info" @click="show = !show">
            Личный кабинет
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import ModalWindow from "./ModalWindow.vue";
export default {
  components: { ModalWindow },
  data() {
    return {
      show: false,
      menu: false,
    };
  },
  computed: {
    changeIcon() {
      if (this.show) {
        return "clear";
      } else {
        return "menu";
      }
    },
  },
};
</script>

<style lang="scss">

.burger {
  font-size: 14px;
  line-height: 1.4;
  font-family: Arial, Helvetica, sans-serif !important;
  position: fixed !important;
  width: 100%;
  z-index: 10;
  box-shadow: 1px 1px rgba(0, 0, 0, 0.411);
  height: 60px !important;
  background-color: black;
  display: none;
  justify-content: space-between;

  & nav {
    display: flex;
    flex-direction: row-reverse;
    background-color: black;
    position: relative;
    & ul {
      display: flex;
      flex-direction: column;
      height: 103.5vh;
      width: 400px;
      padding-right: 60px;
      margin-right: -60px;
      background-color: rgba(0, 0, 0, 0.951);
      & li {
        font-size: 30px;
        font-weight: bold;
        width: 270px;
        margin-bottom: 50px;
        margin-left: 20px;
        & a {
          color: white !important;
          &:hover {
            color: orange !important;
            border-bottom: 2px solid white;
            transition: 0.2s ease;
          }
        }
      }
    }
  }
  & .menu-i {
    color: grey;
    font-size: 60px;
    z-index: 10;
  }
  & .logo {
    height: 45px;
    margin: 4px 5px 5px 0;
  }
}
</style>