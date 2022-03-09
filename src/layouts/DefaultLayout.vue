<template>
  <main class="main">
    <slot />
    <Spinner v-show="isLoading" />
  </main>
  <footer class="footer">
    <Navbar />
  </footer>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Spinner from "../components/Spinner.vue";

export default {
  name: "DefaultLayout",
  components: { Navbar, Spinner },
  computed: {
    isLoading() {
      return this.$store.getters.GET_IS_LOADING;
    },
  },
};
</script>
