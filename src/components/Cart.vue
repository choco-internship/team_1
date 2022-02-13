<template>
  <Header :isBackIcon="true">Корзина</Header>
  <section class="cart">
    <div class="cart__group">
      <div class="restaurant-info">
        <h3 class="restaurant-info__title">Mamma mia</h3>
        <p class="restaurant-info__address">ул. Панфилова 109</p>
      </div>
    </div>
    <div class="cart__group">
      <h3 class="cart__title">Мои заказы</h3>
      <MenuItem
        v-for="(order, i) in orders"
        :key="i"
        :name="order.name"
        :price="order.price"
        :img_path="order.img_path"
      />
      <div class="cart__summary">
        <span>Итого</span>
        <span>{{ getSumary }}</span>
      </div>
    </div>
  </section>
  <footer class="fixed-button container">
    <BaseButton :price="getSumary">Оплатить</BaseButton>
  </footer>
</template>

<script>
import Header from "./Header.vue";
import MenuItem from "./MenuItem.vue";
import BaseButton from "./BaseButton.vue";
export default {
  components: { Header, MenuItem, BaseButton },
  data() {
    return {
      orders: [
        {
          name: "Пицца Маргарита",
          price: 1600,
          img_path: "pizza0",
        },
        {
          name: "Пицца Пепперони",
          price: 1600,
          img_path: "pizza1",
        },
      ],
    };
  },
  computed: {
    getSumary() {
      return this.orders.reduce((a, b) => +a + +b.price, 0);
    },
  },
};
</script>

<style scoped>
.cart {
  height: 100vh;
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
