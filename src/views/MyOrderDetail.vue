<template>
  <Header :isBackIcon="true">Детали заказа</Header>
  <section class="detail main-bg-color">
    <div class="detail__card container">
      <h3 class="detail__title">{{ orders.restaurant.name }}</h3>
      <p class="detail__address">{{ orders.restaurant.location }}</p>
      <div class="detail__divider"></div>
      <div class="detail-block">
        <p class="detail-block__title">Статус заказа</p>
        <p class="detail-block__text">Завершен</p>
      </div>
      <div class="detail-block">
        <p class="detail-block__title">Дата</p>
        <p class="detail-block__text">
          {{ convertToDate(orders.restaurant.created_at) }}
        </p>
      </div>
      <div class="detail-block">
        <p class="detail-block__title">Номер заказа</p>
        <p class="detail-block__text">№3161389</p>
      </div>
    </div>
    <div class="detail__card container">
      <div class="detail-block">
        <p class="detail-block__title">Позиции в заказе</p>
        <div
          v-for="order_detail in orders.order_detail"
          :key="order_detail.id"
          class="detail-block__inner"
        >
          <span class="detail-block__text"
            >{{ order_detail.quantity }} х {{ order_detail.product.name }}</span
          >
          <span class="detail-block__text"
            >{{ order_detail.product.price }} тг</span
          >
        </div>
        <div class="detail__divider"></div>
        <div class="detail__summary">
          <span>Итого</span>
          <span>{{ orders.total }} тг</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Header from "@/components/Header.vue";

export default {
  name: "MyOrdersDetail",
  components: { Header },
  computed: {
    orders() {
      return this.$store.getters.GET_ORDERS;
    },
  },
  methods: {
    convertToDate(str) {
      return str.replace("T", ", ").substring(0, 17);
    },
  },
};
</script>

<style>
.detail {
  background-color: rgba(248, 248, 248, 255);
  flex: 1;
}

.detail__card {
  background-color: #fff;
  padding-top: 20px;
  padding-bottom: 16px;
  margin-bottom: 8px;
}

.detail__title {
  font-size: 16px;
  line-height: 16px;
  color: #131113;
  margin-bottom: 12px;
}

.detail__address {
  font-size: 14px;
  line-height: 16px;
  color: #8f8f8f;
  margin-bottom: 12px;
}

.detail__divider {
  height: 1px;
  width: 100%;
  background-color: #ececec;
  margin: 12px 0px;
}

.detail-block {
  margin-bottom: 16px;
}

.detail-block:last-child {
  margin: 0;
}

.detail-block__title {
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  color: #8f8f8f;
  margin-bottom: 8px;
}

.detail-block__text {
  font-size: 14px;
  line-height: 16px;
  color: #131113;
}

.detail-block__inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
}

.detail__summary {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  color: #000000;
}
</style>
