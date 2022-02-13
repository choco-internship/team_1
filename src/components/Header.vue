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
      <h1 class="title">
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
.header {
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  max-width: 100vw;
  z-index: 1;
}
.top-bar {
  display: flex;
  padding: 20px 16px;
  background-color: #fff;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.15);
}
.top-bar--flat {
  box-shadow: none;
}

.top-bar__back-btn {
  padding: 0;
  margin-right: 32px;
  background: none;
  border: none;
}
</style>
