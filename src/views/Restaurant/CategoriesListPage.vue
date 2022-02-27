<template>
  <Header :isBackIcon="true">Меню</Header>
  <section class="categories">
    <ul
      class="categories-list"
      v-for="(categorie, i) in restaurant.product_categories"
      :key="i"
    >
      <li class="categories-list__item">
        <span class="categories-list__name">{{
          categorie.product_category_name
        }}</span>
        <span class="categories-list__amount">{{
          categorie.products.length
        }}</span>
      </li>
    </ul>
  </section>
</template>

<script>
import Header from "../../components/Header.vue";
export default {
  name: "CategoriesListPage",
  components: { Header },
  computed: {
    getId() {
      return this.$route.params.id;
    },
    restaurant() {
      return this.$store.state.restaurant;
    },
  },
  created() {
    this.$store.dispatch("FETCH_RESTAURANT", this.getId);
  },
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
