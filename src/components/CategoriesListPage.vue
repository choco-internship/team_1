<template>
  <Header :isBackIcon="true">Меню</Header>
  <section class="categories">
    <ul
      class="categories-list"
      v-for="categorie in $options.$categories"
      :key="categorie.id"
    >
      <li class="categories-list__item">
        <span class="categories-list__name">{{ categorie.name }}</span>
        <span class="categories-list__amount">{{ categorie.amount }}</span>
      </li>
    </ul>
  </section>
</template>

<script>
import categories from "@/data/categories.json";
import Header from "./Header.vue";
export default {
  name: "CategoriesListPage",
  components: { Header },
  $categories: categories,
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
