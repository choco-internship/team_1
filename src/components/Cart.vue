<template>
  <Header :isBackIcon="true">Корзина</Header>
  <section class="cart">
    <div class="cart__group">
      <div class="restaurant-info">
        <h3 class="restaurant-info__title">{{ restaurant.restaurant_name }}</h3>
        <p class="restaurant-info__address">
          {{ restaurant.location }}
        </p>
      </div>
    </div>
    <div class="cart__group">
      <h3 class="cart__title">Мои заказы</h3>
      <MenuItem v-for="(product, i) in cart" :key="i" :product="product" />
      <div class="cart__summary">
        <span>Итого</span>
        <span>{{ cartTotalPrice }}</span>
      </div>
    </div>
  </section>
  <footer v-if="cartTotalPrice" class="fixed-button container">
    <BaseButton :price="cartTotalPrice" @click="makeOrder">Оплатить</BaseButton>
  </footer>
</template>

<script>
import Header from "./Header.vue";
import MenuItem from "../views/Restaurant/MenuItem.vue";
import BaseButton from "./BaseButton.vue";
import api from "../services/api";
export default {
  components: { Header, MenuItem, BaseButton },
  computed: {
    cart() {
      return this.$store.state.cart;
    },
    cartTotalPrice() {
      return this.$store.getters.GET_TOTAL_PRICE;
    },
    restaurant() {
      return this.$store.state.restaurant;
    },
  },
  mounted() {
    if (!this.cartTotalPrice) {
      this.$router.push("/");
    }
  },
  methods: {
    async makeOrder() {
      if (this.cart) {
        let order = {
          restaurant_id: this.restaurant.restaurant_id,
          products: [],
        };

        this.cart.forEach((product) => {
          order.products.push({
            id: product.product_id,
            quantity: product.amount,
          });
        });
        try {
          api.restaurants.makeOrder(order);
        } catch {
          (error) => console.log(error);
        } finally {
          this.$store.dispatch("emptyCart");
        }
      }
    },
  },
};
</script>

<style scoped>
.cart {
  min-height: 100vh;
  background-color: #f8f8f8;
}
.cart__title {
  font-weight: 600;
  font-size: 16px;
  line-height: 16px;
}
.cart__group {
  background-color: #fff;
  padding: 20px 16px;
}
.cart__group:first-child {
  margin-bottom: 16px;
}
.cart__summary {
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
}
</style>
