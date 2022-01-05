<template>
  <div class="films-layout">
    <main-header />
    <burger />

    <router-view></router-view>
  </div>
</template>

<script>
import MainHeader from "./MainHeader.vue";
import Burger from "./modal/Burger.vue";

export default {
  components: { MainHeader, Burger },
  methods: {
    created() {
      this.load(1000);
    },
  },
};
</script>
