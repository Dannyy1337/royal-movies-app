<template>
  <div class="car-slide" :style="bgStyles">
    <h2>{{ slide_data.name }}</h2>
    <router-link tag="button"
    :to="{name: 'filmPage', params: {id: slide_data.id}}"
     class="test">Перейти</router-link>
  </div>
</template>

<script>
export default {
  props: {
    slide_data: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    bgStyles() {
      return {
        "background-image": this.slide_data.bgq,
      };
    },
  },
};
</script>

<style lang='scss'>
.car-slide {
  background-position: center;
  background-size: cover;
  min-height: 75vh;
  min-width: 996.3px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  flex-wrap: wrap;
  & button {
    height: 40px;
    border: 2px solid white !important;
    -webkit-text-fill-color: white;
    margin:10px 30px;
  }
  & h2 {
    width: 100%;
    text-shadow: 2px 1.5px black;
    
  }
}
</style>