<template>
  <main class="main">
    <router-view></router-view>
  </main>
  <footer class="footer">
    <Navbar />
  </footer>
</template>

<script>
import Navbar from "./components/Navbar.vue";
export default {
  name: "App",
  components: { Navbar },
};
</script>

<style>
.main {
  flex: 1;
}
</style>
