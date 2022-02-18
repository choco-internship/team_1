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
  computed: {
    layout() {
      return this.$route.meta.layout || "DefaultLayout";
    },
  },
  components: { DefaultLayout, HiddenLayout },
};
</script>

<style scoped></style>
