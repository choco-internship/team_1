<template>
  <Header :isBackIcon="true">Меню</Header>
  <section class="categories">
    <ul class="categories-list">
      <li class="categories-list__item">
        <span class="categories-list__name">Пицца</span>
        <span class="categories-list__amount">20</span>
      </li>
      <li class="categories-list__item">
        <span class="categories-list__name">Напитки</span>
        <span class="categories-list__amount">11</span>
      </li>
      <li class="categories-list__item">
        <span class="categories-list__name">Салаты</span>
        <span class="categories-list__amount">12</span>
      </li>
      <li class="categories-list__item">
        <span class="categories-list__name">Супы</span>
        <span class="categories-list__amount">12</span>
      </li>
      <li class="categories-list__item">
        <span class="categories-list__name">Паста</span>
        <span class="categories-list__amount">12</span>
      </li>
      <li class="categories-list__item">
        <span class="categories-list__name">Горячее</span>
        <span class="categories-list__amount">12</span>
      </li>
      <li class="categories-list__item">
        <span class="categories-list__name">Кофе</span>
        <span class="categories-list__amount">12</span>
      </li>
      <li class="categories-list__item">
        <span class="categories-list__name">Чай</span>
        <span class="categories-list__amount">12</span>
      </li>
      <li class="categories-list__item">
        <span class="categories-list__name">Десерты</span>
        <span class="categories-list__amount">12</span>
      </li>
    </ul>
  </section>
</template>

<script>
import Header from "./Header.vue";
export default {
  name: "CategoriesListPage",
  components: { Header },
};
</script>

<style scoped>
.categories-list {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.categories-list__item {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 16px;
  line-height: 20px;
  padding: 16px;
  border-top: 1px solid #dbdbdb;
  cursor: pointer;
}
.categories-list__amount {
  color: #8f8f8f;
}
</style>
