<template>
  <Authorization authOption="login" @onSubmit="loginUser" />
  <Modal icon="alert" text="Неправильный e-mail или пароль." />
</template>

<script>
import Authorization from "@/components/Authorization.vue";
import Modal from "@/components/Modal.vue";

import api from "@/services/api";

export default {
  name: "Login",
  components: { Authorization, Modal },
  methods: {
    async loginUser(body) {
      this.$store.commit("SET_IS_LOADING", true);
      try {
        const { data } = await api.auth.loginUser(body);
        const token = data.access_token;
        const token_expire = Date.now() / 1000 + data.expires_in;

        if (token) {
          localStorage.setItem("access_token", token);
          localStorage.setItem("token_expire", token_expire);
          this.$router.push("/");
          this.$store.commit("SET_IS_LOADING", false);
        }
      } catch (error) {
        this.$store.commit("SET_IS_MODAL_OPEN", true);
        console.log("ERROR", error);
      } finally {
        this.$store.commit("SET_IS_LOADING", false);
      }
    },
  },
};
</script>
