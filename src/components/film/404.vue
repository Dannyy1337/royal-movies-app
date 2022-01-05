<template>
  <div class="error_contaier">
    <main-header class="header" />
    <div class="main">
    </div>
    <my-footer class="footer" />
  </div>
</template>

<script>
import MainHeader from "./MainHeader.vue";
import MyFooter from "./MyFooter.vue";

export default {
  components: { MainHeader, MyFooter },
};
</script>

<style lang='scss'>
.error_contaier {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: url('./img/info/fail.png') no-repeat;
  background-position: center;
  background-size: cover;
  & .footer {
    min-width: 100%;
  }
}
</style>