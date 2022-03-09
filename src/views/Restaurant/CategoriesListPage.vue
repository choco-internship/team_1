<template>
  <Header :isBackIcon="true">Меню</Header>
  <section class="categories">
    <ul
      class="categories-list"
      v-for="(categorie, i) in restaurant.product_categories"
      :key="i"
    >
      <li class="categories-list__item">
        <router-link
          class="categories-list__link"
          :to="{
            name: 'restaurant',
            params: {
              id: restaurant.restaurant_id,
              selectedCategorie: categorie.product_category_id,
            },
          }"
        >
          <span class="categories-list__name">{{
            categorie.product_category_name
          }}</span>
          <span class="categories-list__amount">{{
            categorie.products.length
          }}</span>
        </router-link>
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
    this.$store.dispatch("fetchRestaurant", this.getId);
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
  padding: 16px;
  border-top: 1px solid #dbdbdb;
  list-style: none;
  cursor: pointer;
}
.categories-list__link {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 16px;
  line-height: 20px;
  text-decoration: none;
  color: #131113;
}
.categories-list__amount {
  color: #8f8f8f;
}
</style>
