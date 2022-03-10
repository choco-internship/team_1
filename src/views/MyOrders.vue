<template>
  <Header>Мои заказы</Header>
  <section class="order main-bg-color">
    <div v-if="isAuthenticated" class="order__list">
      <div
        v-for="order in orders"
        :key="order.id"
        @click="navigateToDetail(order.id)"
        class="order__link"
      >
        <div class="order-item container">
          <div class="order-item__header">
            <h3 class="order-item__title">{{ order.restaurant.name }}</h3>
            <p class="order-item__date">
              {{ convertToDate(order.created_at) }}
            </p>
          </div>
          <p class="order-item__price">{{ order.total }} тг</p>
          <p class="order-item__status">
            Статус -
            <span
              :class="`order-item__status-text order-item__status-text ${
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
      </div>
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

import { convertToDate, defineStatus } from "@/helper";

export default {
  name: "MyOrders",
  components: {
    Header,
    BaseButton,
  },
  computed: {
    isAuthenticated() {
      return localStorage.getItem("access_token");
    },
    orders() {
      return this.$store.getters.GET_ORDERS;
    },
  },
  mounted() {
    if (this.isAuthenticated) {
      this.$store.dispatch("fetchOrders");
    }
  },
  methods: {
    convertToDate: convertToDate,
    defineStatus: defineStatus,
    navigateToDetail(id) {
      this.$router.push(`/order-detail/${id}`);
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
