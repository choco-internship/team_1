<template>
  <Header :isBackIcon="true" :isFlat="true">
    {{ restaurant.restaurant_name }}
  </Header>
  <section class="menu-info">
    <!-- slider -->
    <Slider />
    <!-- address -->
    <div class="menu-info__address container">
      {{ restaurant.location }}
    </div>
    <!-- menu categories -->
    <nav class="menu-info__nav container">
      <router-link class="menu-info__categories-btn" :to="`/menu/${getId}`">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.75 12H20.25"
            stroke="#3C3C43"
            stroke-opacity="0.6"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M3.75 6H20.25"
            stroke="#3C3C43"
            stroke-opacity="0.6"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M3.75 18H20.25"
            stroke="#3C3C43"
            stroke-opacity="0.6"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </router-link>
      <ul class="categories-list">
        <li
          class="categories-list__item categories-list__item--active"
          v-for="(categorie, id) in restaurant.product_categories"
          :key="id"
        >
          {{ categorie.product_category_name }}
        </li>
      </ul>
    </nav>
  </section>
  <section class="menu container">
    <div
      class="menu-category"
      v-for="(menu, i) in restaurant.product_categories"
      :key="i"
    >
      <div class="menu-category__title">{{ menu.product_category_name }}</div>
      <div class="menu-category__list">
        <MenuItem
          v-for="(product, i) in menu.products"
          :product_id="product.product_id"
          :name="product.product_name"
          :description="product.description"
          :price="product.price"
          :img_path="product.image"
          :key="i"
        />
      </div>
    </div>
  </section>
  <router-link v-if="order.length" class="fixed-button container" to="/cart">
    <BaseButton :amount="1" :price="1600" :contentDisabled="true"
      >Корзина</BaseButton
    >
  </router-link>
</template>

<script>
import Header from "../../components/Header.vue";
import Slider from "../../components/Slider.vue";
import MenuItem from "./MenuItem.vue";
import BaseButton from "../../components/BaseButton.vue";
export default {
  name: "RestaurantPage",
  components: { Header, Slider, MenuItem, BaseButton },
  data() {
    return {
      order: [],
    };
  },
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
/* menu-info */
.menu-info__address {
  margin-top: 16px;
  font-size: 14px;
  line-height: 16px;
  color: #8f8f8f;
}

.menu-info__nav {
  margin-top: 20px;
  display: flex;
  align-items: center;
}
/* categories-list */
.categories-list::-webkit-scrollbar {
  display: none; /* Chrome, Safari, Opera*/
}

.categories-list {
  display: flex;
  align-items: center;
  overflow: auto;
  white-space: nowrap;
  margin-left: 16px;

  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}

.categories-list__item {
  list-style: none;
  padding: 10px 24px;
  font-size: 14px;
  line-height: 16px;
  font-weight: 400;
  color: #8f8f8f;
}

.categories-list__item:hover {
  cursor: pointer;
}

.categories-list__item--active {
  background: rgba(218, 218, 218, 0.35);
  border-radius: 40px;
}

.menu {
  display: flex;
  flex-direction: column;
  position: relative;
}
.menu-category__title {
  margin-top: 12px;
  font-weight: 700;
  font-size: 16px;
  line-height: 1;
  color: #8f8f8f;
}
</style>
