<template>
  <div class="timetable-page">
    <burger />
    <main-header />
    <div class="table">
      <table>
        <tr>
          <th>День недели</th>
          <th>Время</th>
          <th>Название фильма</th>
          <th>Цена</th>
        </tr>

        <tr v-for="timetable in timetables" :key="timetable.id">
          <td>{{ timetable.day }}</td>
          <td>{{ timetable.time }}</td>
          <td>
            <router-link
              tag="button"
              :to="{ name: 'filmPage', params: { id: timetable.id } }"
              class="link"
              >{{ timetable.name }}</router-link
            >
          </td>
          <td>{{ timetable.price }}</td>
        </tr>
      </table>
    </div>
    <my-footer class="footer" />
  </div>
</template>

<script>
import MainHeader from "./MainHeader.vue";
import { timetables } from "../../data/timetable";
import MyFooter from "./MyFooter.vue";
import { films } from "../../data/filmsPage";
import Burger from "./modal/Burger.vue";

export default {
  components: { MainHeader, MyFooter, Burger },
  props: {
    id: Number,
    film: Object,
  },
  data() {
    return {
      timetables: timetables,
      films: films,
    };
  },
};
</script>

<style lang='scss'>
.timetable-page {
  min-height: 100vh;
  height: 100%;
  width: 100%;
  font-family: Arial, Helvetica, sans-serif;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  background: url("../film/img/bg.png");
  background-size: cover;
  background-attachment: fixed;
  & table {
    color: white;
    & td {
      border-bottom: 1px dashed red;
      border-right: 1px dashed red;
      font-size: 20px;
      padding-left: 20px;
      padding: 10px;
      &:first-child {
        border-left: 1px dashed red;
      }
      & a {
        color: white;
        &:hover {
          color: #e68800;
        }
      }
    }
    & th {
      font-size: 25px;
      padding: 30px 20px;
      padding-top: 100px;
      &:last-child {
        padding-right: 0;
      }
    }
    & .link {
      border: none !important;
      max-width: 100% !important;
      padding: 0;
      font-family: Arial, Helvetica, sans-serif !important;
      color: white !important;
      font-size: 25px;
      -webkit-text-fill-color: white;
      margin-left: 20px;
    }
  }
  & .footer {
    min-width: 100%;
  }
  & .table {
    min-height: 100%;
    display: flex;
    align-items: center;
  }
}
</style>