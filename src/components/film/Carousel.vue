<template>
  <div class="caroseul">
    <div
      class="caroseul_area"
      :style="{ 'margin-left': '-' + 100 * currentSlideIndex + '%' }"
    >
      <car-slide
        v-for="slide in caroseul_data"
        :key="slide.id"
        :slide_data="slide"
      />
    </div>
    <button @click="prevSlide">
      <i class="material-icons"> arrow_back_ios </i>
    </button>
    <button @click="nextSlide">
      <i class="material-icons"> arrow_forward_ios </i>
    </button>
  </div>
</template>

<script>
import CarSlide from "./CarSlide.vue";

export default {
  components: { CarSlide },
  data() {
    return {
      currentSlideIndex: 0,
    };
  },
  props: {
    caroseul_data: {
      type: Array,
      default: () => [],
    },
    intervals: {
      type: Number,
      default: 0,
    },
  },
  methods: {
    prevSlide() {
      if (this.currentSlideIndex > 0) {
        this.currentSlideIndex--;
      }
    },
    nextSlide() {
      if (this.currentSlideIndex >= this.caroseul_data.length - 1) {
        this.currentSlideIndex = 0;
      } else {
        this.currentSlideIndex++;
      }
    },
  },
  mounted() {
    if (this.intervals > 0) {
      let vm = this;
      setInterval(function () {
        vm.nextSlide();
      }, vm.intervals);
    }
  },
};
</script>

<style lang='scss'>
.caroseul {
  max-width: 1000px;
  overflow: hidden;
  margin: 0 auto;
  & .caroseul_area {
    display: flex;
    transition: all ease 0.5s;
    border-bottom: 1px solid grey;
  }
  & button {
    float: left;
    min-width: 30px;
    &:last-child {
      float: right;
    }
  }
}
</style>