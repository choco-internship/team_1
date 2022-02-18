<template>
  <Header :isBackIcon="true" :isFlat="true">
    {{ restaurant.rest_name }}
  </Header>
  <section class="menu-info">
    <!-- slider -->
    <Slider />
    <!-- address -->
    <div class="menu-info__address container">
      {{ restaurant.rest_address }}
    </div>
    <!-- menu categories -->
    <nav class="menu-info__nav container">
      <router-link class="menu-info__categories-btn" :to="`/menu/:${id}`">
        <img src="@/assets/images/burger_menu.svg" alt="" />
      </router-link>
      <ul class="categories-list">
        <li class="categories-list__item categories-list__item--active">
          Пицца
        </li>
        <li class="categories-list__item">Напитки</li>
        <li class="categories-list__item">Салаты</li>
        <li class="categories-list__item">Супы</li>
      </ul>
    </nav>
  </section>
  <section class="menu container">
    <div
      class="menu-category"
      v-for="(menu, i) in restaurant.rest_menu"
      :key="i"
    >
      <div class="menu-category__title">{{ menu.menu_categorie }}</div>
      <div class="menu-category__list">
        <MenuItem
          v-for="(menu_item, index) in menu.menu_list"
          :name="menu_item.name"
          :description="menu_item.description"
          :price="menu_item.price"
          :img_path="menu_item.img_path"
          :key="index"
        />
      </div>
    </div>
  </section>
  <router-link class="fixed-button container" to="/cart">
    <BaseButton :amount="1" :price="1600" :contentDisabled="true"
      >Корзина</BaseButton
    >
  </router-link>
</template>

<script>
import restaurants from "@/data/restaurants.json";
import Header from "./Header.vue";
import Slider from "./Slider.vue";
import MenuItem from "./MenuItem.vue";
import BaseButton from "./BaseButton.vue";
export default {
  name: "RestaurantPage",
  components: { Header, Slider, MenuItem, BaseButton },
  data() {
    return {
      restaurant: {},
      order: [],
    };
  },
  computed: {
    currentRouteName() {
      return this.$route.params.id;
    },
  },
  methods: {
    getRestaurantById() {
      return restaurants.filter((rest) => rest.id == this.currentRouteName)[0];
    },
  },
  beforeMount() {
    this.restaurant = this.getRestaurantById();
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
