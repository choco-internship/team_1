<template>
  <swiper :slides-per-view="1" :space-between="50">
    <swiper-slide v-for="(silde, i) in slides" :key="i">
      <div class="slider__item">
        <img class="slider__image" :src="silde.url" alt="restaurant_image" />
      </div>
      <span class="slider__count">{{ `${i + 1}/${slides.length}` }}</span>
    </swiper-slide>
  </swiper>
  <div class="slider"></div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/swiper-bundle.min.css";

export default {
  name: "Slider",
  components: {
    Swiper,
    SwiperSlide,
  },
  props: {
    slides: {
      type: Array,
    },
  },
};
</script>

<style scoped>
/* slider */

.slider {
  position: relative;
}

.slider__image {
  width: 100%;
}

.slider__item {
  max-height: 173px;
  position: relative;
}

.slider__item::after {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 43%,
    rgba(7, 7, 7, 0.6) 87%
  );
}

.slider__count {
  position: absolute;
  bottom: 16px;
  left: 16px;
  opacity: 0.8;
  color: #131113;
  background-color: #ffffff;
  border-radius: 4px;
  padding: 5px 10px;
  font-size: 12px;
  line-height: 18px;
}
</style>
