<template>
  <header class="header">
    <div class="top-bar" :class="isFlat ? 'top-bar--flat' : null">
      <button
        v-show="isBackIcon"
        class="top-bar__back-btn"
        @click="$router.go(-1)"
      >
        <img src="@/assets/images/arrow_back.svg" alt="" />
      </button>
      <h1 class="top-bar__title">
        <slot></slot>
      </h1>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  props: {
    isBackIcon: Boolean,
    isFlat: Boolean,
  },
};
</script>

<style scoped>
.top-bar {
  display: flex;
  padding: 20px 16px;
  background-color: #fff;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.15);
}

.top-bar--flat {
  box-shadow: none;
}

.top-bar__title {
  font-family: "Roboto", sans-serif;
  font-size: 20px;
  font-weight: 700;
  line-height: 20px;
  color: #131113;
}

.top-bar__back-btn {
  padding: 0;
  margin-right: 32px;
  background: none;
  border: none;
}
</style>
