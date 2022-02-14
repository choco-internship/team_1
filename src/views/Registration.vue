<template>
  <Header :isBackIcon="true" :isFlat="true"></Header>
  <div class="registration container">
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
            v-model:value="formGroup[formPosition].value"
            error="Введите корректный почтовый адрес"
            :isError="formGroup[formPosition].error"
          />
          <AuthInput
            v-else
            id="password"
            type="password"
            label="Пароль"
            placeholder="Введите пароль"
            v-model:value="formGroup[formPosition].value"
            error="Пароль не соответствует требованиям"
            :isError="formGroup[formPosition].error"
          />
        </div>
        <p class="form__condition">
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
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import BaseButton from "@/components/BaseButton.vue";
import AuthInput from "@/components/AuthInput.vue";

export default {
  components: { Header, BaseButton, AuthInput },
  data() {
    return {
      formPosition: 0,
      formGroup: [
        {
          title: "Регистрация",
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
      return this.formGroup[this.formPosition].value ? false : true;
    },
    isLastStep() {
      return this.formPosition === this.formGroup.length - 1;
    },
    onSubmitText() {
      return this.isLastStep ? "Зарегистрироваться" : "Далее";
    },
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
        this.$router.push("/");
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

.form__condition {
  margin-top: 16px;
  font-size: 12px;
  line-height: 14px;
  text-align: center;
}

.form__condition,
.form__condition-link {
  color: #8f8f8f;
}
</style>
