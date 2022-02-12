<template>
  <div class="registration container">
    <form class="form">
      <div class="form__wrapper">
        <h1 class="title">Регистрация</h1>
        <p class="form__subtitle">Введите ваш почтовый адрес</p>

        <div class="form__controll">
          <div class="form__input-wrapper">
            <label class="form__label" for="email">e-mail</label>
            <input
              id="email"
              class="form__input"
              type="email"
              placeholder="Введите почтовый адрес"
            />
          </div>
        </div>
        <p class="form__condition">
          Нажимая “Далее”, вы принимаете <br />
          <a class="form__condition-link" href="#">условия публичной оферты</a>
        </p>
      </div>
      <div class="form__controll">
        <BaseButton disabled>Далее</BaseButton>
      </div>
    </form>
  </div>
</template>

<script>
import PageTitle from "@/components/PageTitle.vue";
import BaseButton from "@/components/BaseButton.vue";
export default {
  components: { PageTitle, BaseButton },
};
</script>

<style scoped>
.registration {
  position: relative;
  padding-top: 28px;
  padding-bottom: 23px;
  height: 100vh;
}

.form {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
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
