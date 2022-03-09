<template>
  <main class="main">
    <slot />
    <Spinner v-show="isLoading" />
  </main>
</template>

<script>
import Spinner from "../components/Spinner.vue";
export default {
  name: "HiddenLayout",
  components: { Spinner },
  computed: {
    isLoading() {
      return this.$store.getters.GET_IS_LOADING;
    },
  },
};
</script>

<style></style>
