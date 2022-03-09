<template>
  <Header>Заказ с собой</Header>
  <section v-if="restaurants" class="restaurants">
    <div class="container">
      <div class="restaurants__list">
        <div
          class="restaurants__item"
          v-for="{ restaurant, id } in restaurants"
          :key="id"
        >
          <router-link
            class="restaurant__link"
            :to="`/restaurant/${restaurant.restaurant_data.id}`"
          >
            <img
              class="restaurant__image"
              :src="restaurant.image.image_url"
              :alt="restaurant.restaurant_data.name"
            />

            <div class="restaurant-info">
              <h3 class="restaurant-info__title">
                {{ restaurant.restaurant_data.name }}
              </h3>
              <p class="restaurant-info__address">
                {{ restaurant.restaurant_data.location }}
              </p>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Header from "../components/Header.vue";

export default {
  name: "Home",
  components: { Header },
  created() {
    this.$store.dispatch("fetchRestaurants");
    this.$store.dispatch("emptyCart");
  },
  computed: {
    restaurants() {
      return this.$store.state.restaurants;
    },
  },
};
</script>

<style scoped>
.restaurant__image {
  margin-right: 16px;
  max-width: 90px;
  max-height: 90px;
}
.restaurant__link {
  display: flex;
  text-decoration: none;
  align-items: center;
  padding: 16px 0;
  border-bottom: 1px solid #ececec;
}
</style>
