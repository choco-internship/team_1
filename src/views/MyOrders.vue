<template>
  <Header>Мои заказы</Header>
  <section class="order main-bg-color">
    <div v-if="isAuthenticated" class="order__list">
      <router-link
        v-for="order in orders"
        :key="order.order_id"
        :to="`/order-detail/${order.order_id}`"
        class="order__link"
      >
        <div class="order-item container">
          <div class="order-item__header">
            <h3 class="order-item__title">{{ name }}</h3>
            <p class="order-item__date">
              {{ convertToDate(order.created_at) }}
            </p>
          </div>
          <p class="order-item__price">{{ order.total }} тг</p>
          <p class="order-item__status">
            Статус -
            <span
              :class="`order-item__status-text order-item__status-text${
                defineStatus(order.order_status).class
              }`"
            >
              {{ defineStatus(order.order_status).text }}
            </span>
          </p>
          <img
            class="order-item__btn"
            src="@/assets/images/chevron_right.svg"
            alt=""
          />
        </div>
      </router-link>
    </div>
    <div v-else class="order__hidden container">
      <div class="order__hidden-inner">
        <h2 class="order__hidden-title">Войдите в свой аккаунт</h2>
        <p class="order__hidden-subtitle">
          Необходимо войти в свой аккаунт, чтобы увидеть историю заказов
        </p>
        <div class="order__hidden-wrapper">
          <BaseButton @click="$router.push('/login')">Войти </BaseButton>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import BaseButton from "@/components/BaseButton.vue";
import Header from "@/components/Header.vue";

export default {
  name: "MyOrders",
  components: { Header, BaseButton },
  computed: {
    isAuthenticated() {
      return (
        localStorage.getItem("access_token") &&
        this.$store.getters.GET_IS_AUTHENTICATED
      );
    },
    orders() {
      return this.$store.getters.GET_ORDERS;
    },
  },
  created() {
    if (this.isAuthenticated) {
      this.fetchOrders();
    }
  },
  methods: {
    fetchOrders() {
      this.$store.dispatch("FETCH_ORDERS");
    },
    convertToDate(str) {
      return str.replace("T", ", ").substring(0, 17);
    },
    defineStatus(number) {
      switch (number) {
        case 0:
          return {
            text: "в оброботке",
            class: "--start",
          };
        case 1:
          return {
            text: "на кухне",
            class: "--prepare",
          };
        case 2:
          return {
            text: "готов",
            class: "",
          };
        case 3:
          return {
            text: "завершен",
            class: "--ready",
          };
      }
    },
  },
};
</script>

<style scoped>
.order {
  flex: 1;
  padding-bottom: 56px;
}

.order__list {
  padding-top: 20px;
}

.order__link {
  text-decoration: none;
}

.order-item {
  position: relative;
  padding: 16px;
  background-color: #ffffff;
  margin-bottom: 13px;
  cursor: pointer;
}

.order-item__header {
  display: flex;
  justify-content: space-between;
  align-content: center;
  margin-bottom: 8px;
}

.order-item__title {
  font-weight: bold;
  font-size: 16px;
  line-height: 20px;
  color: #131113;
}

.order-item__date,
.order-item__price,
.order-item__status,
.order-item__status-text {
  font-size: 14px;
  line-height: 16px;
  color: #8f8f8f;
}

.order-item__date {
  margin-right: 36px;
}

.order-item__status {
  margin-top: 8px;
}

.order-item__status-text--start {
  color: #2997ff;
}

.order-item__status-text--prepare {
  color: #e4853d;
}

.order-item__status-text--ready {
  color: #51a451;
}

.order-item__btn {
  position: absolute;
  top: 44px;
  right: 16px;
}

.order__hidden {
  padding-top: 162px;
}

.order__hidden-title {
  font-size: 18px;
  line-height: 24px;
  color: #131113;
  text-align: center;
  margin-bottom: 16px;
}

.order__hidden-subtitle {
  font-size: 16px;
  line-height: 20px;
  color: #131113;
  text-align: center;
  margin-bottom: 32px;
}

.order__hidden-wrapper {
  display: flex;
  justify-content: center;
  align-content: center;
}
</style>
