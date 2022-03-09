<template>
  <Header
    :isBackIcon="formPosition > 0"
    :isFlat="true"
    :isAuthHeader="true"
    @returnBack="goBack"
  ></Header>
  <section class="registration container">
    <form class="form">
      <div class="form__wrapper">
        <h1 class="title title--center">
          {{ formGroup[formPosition].title }}
        </h1>
        <p class="form__subtitle">
          {{ formGroup[formPosition].subtitle }}
        </p>
        <div class="form__controll">
          <AuthInput
            v-if="formGroup[formPosition].type === 'email'"
            id="email"
            type="email"
            label="e-mail"
            placeholder="Введите почтовый адрес"
            error="Введите корректный почтовый адрес"
            :value="formGroup[formPosition].value"
            :isError="formGroup[formPosition].error"
            @onTyping="getAuthValue"
          />
          <AuthInput
            v-else
            id="password"
            type="password"
            label="Пароль"
            placeholder="Введите пароль"
            error="Пароль не соответствует требованиям"
            :value="formGroup[formPosition].value"
            :isError="formGroup[formPosition].error"
            @onTyping="getAuthValue"
          />
        </div>
        <div class="form__link">
          <router-link
            v-if="authOption === 'login'"
            to="/registration"
            class="form__terms-link"
          >
            Еще не зарегистрированы? Зарегистрироваться.
          </router-link>
          <router-link v-else to="/login" class="form__terms-link">
            Уже есть аккаунт? Войти.
          </router-link>
        </div>
        <p class="form__link form__condition-link">
          Нажимая “Далее”, вы принимаете <br />
          <a class="form__condition-link" href="#">условия публичной оферты</a>
        </p>
      </div>
      <div class="form__controll">
        <BaseButton
          @click.prevent="nextStep(formGroup[formPosition].type)"
          :disabled="isDisabled"
        >
          {{ onSubmitText }}
        </BaseButton>
      </div>
    </form>
  </section>
</template>

<script>
import Header from "@/components/Header.vue";
import BaseButton from "@/components/BaseButton.vue";
import AuthInput from "@/components/AuthInput.vue";

export default {
  components: { Header, BaseButton, AuthInput },
  props: {
    authOption: {
      type: String,
      required: true,
    },
  },
  emits: ["onSubmit"],
  data() {
    return {
      formPosition: 0,
      formGroup: [
        {
          title: "",
          subtitle: "Введите ваш почтовый адрес",
          type: "email",
          error: false,
          value: "",
        },
        {
          title: "Введите пароль",
          subtitle: "Пароль должен состоять минимум из 9 символов",
          type: "password",
          error: false,
          value: "",
        },
      ],
    };
  },
  computed: {
    isDisabled() {
      return !this.formGroup[this.formPosition].value;
    },
    isLastStep() {
      return this.formPosition === this.formGroup.length - 1;
    },
    onSubmitText() {
      return this.isLastStep
        ? this.authOption === "login"
          ? "Войти"
          : "Зарегистрироваться"
        : "Далее";
    },
    defineTitle() {
      return this.authOption === "login" ? "Вход" : "Регистрация";
    },
  },
  created() {
    this.formGroup[0].title = this.defineTitle;
  },
  methods: {
    nextStep(type) {
      const email = this.formGroup[0].value;
      const password = this.formGroup[1].value;

      switch (type) {
        case "email":
          if (!this.validEmail(email)) {
            this.formGroup[this.formPosition].error = true;
            return;
          }
          break;
        case "password":
          if (!this.validPassword(password)) {
            this.formGroup[this.formPosition].error = true;
            return;
          }
          break;
      }

      if (this.formGroup[this.formPosition].error) {
        this.formGroup[this.formPosition].error = false;
      }

      if (this.isLastStep) {
        this.$emit("onSubmit", { email, password });
        return;
      }

      this.formPosition += 1;
    },
    validEmail(email) {
      const re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
    validPassword(password) {
      const re = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
      return re.test(password);
    },
    getAuthValue(value) {
      this.formGroup[this.formPosition].value = value;
    },
    goBack() {
      if (this.formPosition > 0) {
        this.formPosition -= 1;
      }
    },
  },
};
</script>

<style scoped>
.registration {
  position: relative;
  padding-top: 28px;
  padding-bottom: 23px;
  height: calc(100vh - 68px);
}
.form {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}

.title--center {
  text-align: center;
}

.form__subtitle {
  font-size: 16px;
  line-height: 20px;
  color: #8f8f8f;
  text-align: center;
  margin-top: 12px;
  margin-bottom: 20px;
}

.form__controll {
  display: flex;
  justify-content: center;
  align-items: center;
}

.form__link {
  margin-top: 10px;
  font-size: 12px;
  line-height: 14px;
  text-align: center;
}

.form__condition-link {
  color: #8f8f8f;
}

.form__terms-link {
  color: #2997ff;
}
</style>
