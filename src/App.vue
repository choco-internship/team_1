<template>
  <component :is="layout">
    <router-view />
  </component>
</template>

<script>
import DefaultLayout from "./layouts/DefaultLayout.vue";
import HiddenLayout from "./layouts/HiddenLayout.vue";

export default {
  name: "App",
  components: { DefaultLayout, HiddenLayout },
  computed: {
    layout() {
      return this.$route.meta.layout || "DefaultLayout";
    },
  },
};
</script>

<style scoped></style>
