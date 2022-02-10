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
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap");
html,
body {
  height: 100%;
  padding: 0;
  margin: 0;
}

#app {
  font-family: "Roboto", sans-serif;
  display: flex;
  min-height: 100%;
  flex-direction: column;
}

.main {
  flex: 1;
}
</style>
