<template>
  <div class="my-input">
    <input
      v-model="searchValue"
      placeholder="Введите название..."
      type="search"
      class="search"
    />
 
    <button class="search-button" @click="searchHandler">Найти</button>
  </div>
</template>

<script>


export default {
  data() {
    return {
      searchValue: "",
    };
  },
 
  computed: {
   
    searchHandler() {
      return this.films;
    },
  },
  methods: {
   
  },
};
</script>

<style lang='scss'>
</style>