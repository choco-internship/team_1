<template>
  <Header>Заказ с собой</Header>
  <section class="restaurants">
    <div class="container">
      <div class="restaurants__list">
        <router-link
          class="restaurant__item"
          v-for="restaurant in $options.$restaurants_list"
          :key="restaurant.id"
          :to="`/restaurant/${restaurant.id}`"
        >
          <img
            class="restaurant__image"
            :src="require(`@/assets/images/restaurants/${restaurant.id}.png`)"
            :alt="restaurant.rest_name"
          />

          <div class="restaurant-info">
            <h3 class="restaurant-info__title">{{ restaurant.rest_name }}</h3>
            <p class="restaurant-info__address">
              {{ restaurant.rest_address }}
            </p>
          </div>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script>
import restaurants from "../data/restaurants.json";
import Header from "../components/Header.vue";
export default {
  name: "Home",
  components: { Header },
  $restaurants_list: restaurants,
};
</script>

<style scoped>
.restaurant__image {
  margin-right: 16px;
}
.restaurant__item {
  display: flex;
  text-decoration: none;
  align-items: center;
  padding: 16px 0;
  border-bottom: 1px solid #ececec;
}
</style>
