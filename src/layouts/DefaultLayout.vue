<template>
  <main class="main">
    <slot />
  </main>
  <footer class="footer">
    <Navbar />
  </footer>
</template>

<script>
import Navbar from "../components/Navbar.vue";
export default {
  name: "DefaultLayout",
  components: { Navbar },
};
</script>

<style scoped>
.main {
  padding-bottom: 56px;
}
</style>
