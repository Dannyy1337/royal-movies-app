<template>
  <div class="main-header">
    <modal-window :show="show" @close='show = !show' v-show="show" />
    <div class="main-menu">
      <ul class="ul-menu">
        <li>
          <a href="/" class="logo">
            <img class="logo" src="https://i.yapx.ru/PNrOE.png" />
          </a>
        </li>
        <li><a href="/all-films">Все фильмы</a></li>
        <li><a href="/timetable">Премьеры</a></li>
      </ul>
      <a href="#" class="show-info" @click="show = !show"> Личный кабинет </a>
    </div>
  </div>
</template>

<script>
import ModalWindow from "./modal/ModalWindow.vue";

export default {
  data() {
    return {
      isInfoModalVisible: false,
      isReg: true,
      show: false,
    };
  },
  components: { ModalWindow },
};
</script>

<style lang='scss'>
.main-header {
  font-size: 14px;
  line-height: 1.4;
  font-family: Arial, Helvetica, sans-serif !important;
  position: fixed !important;
  width: 100%;
  z-index: 10;
  box-shadow: 1px 1px rgba(0, 0, 0, 0.411);
}

.main-menu {
  margin: 0;
  min-height: 62px;
  font-size: 18px;
  padding: 0;
  list-style: none;
  border: 1px solid #171717;
  background-color: #000000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  & .ul-menu {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    & li {
      display: inline-block;
      margin-right: 10px;
    }
    & li:last-child {
      float: right;
      margin-right: 10px;
    }
    & .logo {
      height: 41px;
      margin: 0;
      padding: 0;
    }
  }
  & a {
    display: block;
    padding: 8px 10px;
    color: whitesmoke;
    text-decoration: none;
    &:hover {
      color: #e68800;
      transition: 0.5s ease;
    }
    &:active {
      color: #ff7b00;
      transition: 0.5s ease;
    }
  }
  & .show-info{
    margin-right: 20px;
  }
}
</style>