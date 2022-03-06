<template>
  <Authorization authOption="registration" @onSubmit="registerUser" />
  <Modal :icon="defineIcon" :text="defineText" />
</template>

<script>
import Authorization from "@/components/Authorization.vue";
import Modal from "@/components/Modal.vue";

import api from "@/services/api";

export default {
  name: "Registration",
  components: { Authorization, Modal },
  data() {
    return {
      isError: true,
    };
  },
  computed: {
    defineText() {
      return this.isError
        ? "Такой e-mail уже зарегистрирован."
        : "Вы зарегистрировались! Перейдите на страницу входа.";
    },
    defineIcon() {
      return this.isError ? "alert" : "pass";
    },
  },
  methods: {
    async registerUser(body) {
      this.$store.commit("SET_IS_LOADING", true);

      try {
        await api.auth.registerUser(body);
        this.$store.commit("SET_IS_LOADING(", false);
        this.isError = false;
        this.$store.commit("SET_IS_MODAL_OPEN", true);
      } catch (error) {
        this.isError = true;
        this.$store.commit("SET_IS_MODAL_OPEN", true);
        console.log("ERROR", error);
      } finally {
        this.$store.commit("SET_IS_LOADING(", false);
      }
    },
  },
};
</script>
