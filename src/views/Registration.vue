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
          <div class="form__input-wrapper">
            <label class="form__label" :for="formGroup[formPosition].type">
              {{ formGroup[formPosition].label }}
            </label>
            <input
              class="form__input"
              :id="formGroup[formPosition].type"
              :type="formGroup[formPosition].type"
              :placeholder="formGroup[formPosition].placeholder"
              v-model="formGroup[formPosition].value"
            />
          </div>
        </div>
        <p class="form__condition">
          Нажимая “Далее”, вы принимаете <br />
          <a class="form__condition-link" href="#">условия публичной оферты</a>
        </p>
      </div>
      <div class="form__controll">
        <BaseButton
          @click.prevent="nextStep(formGroup[formPosition].type)"
          :disabled="formGroup[formPosition].value ? false : true"
        >
          Далее
        </BaseButton>
      </div>
    </form>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import BaseButton from "@/components/BaseButton.vue";

export default {
  components: { Header, BaseButton },
  data() {
    return {
      formPosition: 0,
      formGroup: [
        {
          type: "email",
          title: "Регистрация",
          subtitle: "Введите ваш почтовый адрес",
          label: "e-mail",
          placeholder: "Введите ваш почтовый адрес",
          value: "",
        },
        {
          type: "password",
          title: "Введите пароль",
          subtitle: "Пароль должен состоять минимум из 9 символов",
          label: "Пароль",
          placeholder: "Введите пароль",
          value: "",
        },
      ],
    };
  },
  methods: {
    nextStep(type) {
      const email = this.formGroup[0].value;
      const password = this.formGroup[1].value;

      switch (type) {
        case "email":
          if (!email) {
            alert("Email required");
          } else if (!this.validEmail(email)) {
            alert("Valid email required.");
            return;
          }
          break;
        case "password":
          if (!password) {
            alert("Password required");
          } else if (!this.validPassword(password)) {
            alert(
              "Valid password required. Minimum eight characters, at least one letter and one number."
            );
            return;
          }
          break;
        default:
          break;
      }

      if (this.formPosition === this.formGroup.length - 1) {
        alert("success");
        return;
      }

      this.formPosition = this.formPosition + 1;
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

.form__input-wrapper {
  max-width: 375px;
  width: 100%;
}

.form__label {
  font-size: 12px;
  line-height: 16px;
  color: #131113;
  margin-bottom: 4px;
}

.form__input {
  max-width: 375px;
  width: 100%;
  padding: 14px 16px;
  border: 1px solid #8f8f8f;
  border-radius: 4px;
  font-size: 16px;
  line-height: 20px;
  color: #131113;
  outline: none;
}

.form__input:focus {
  border-color: #2997ff;
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
