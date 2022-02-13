<template>
  <div class="slider">
    <div class="slider__item">
      <img
        class="slider__image"
        src="@/assets/images/mammamia.png"
        alt="restaurant_image"
      />
    </div>
    <span class="slider__count">1/24</span>
  </div>
</template>

<script>
export default {
  name: "Slider",
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
