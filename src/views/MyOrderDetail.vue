<template>
  <Header :isBackIcon="true">Детали заказа</Header>
  <section class="detail main-bg-color">
    <div class="detail__card container">
      <h3 class="detail__title">{{ order.restaurant.name }}</h3>
      <p class="detail__address">{{ order.restaurant.location }}</p>
      <div class="detail__divider"></div>
      <div class="detail-block">
        <p class="detail-block__title">Статус заказа</p>
        <p class="detail-block__text">
          {{ defineStatus(order.order_status).text }}
        </p>
      </div>
      <div class="detail-block">
        <p class="detail-block__title">Дата</p>
        <p class="detail-block__text">
          {{ convertToDate(order.created_at) }}
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
          v-for="order_detail in order.order_details"
          :key="order_detail.id"
          class="detail-block__inner"
        >
          <span class="detail-block__text">
            {{ order_detail.quantity }} х {{ product[0].product_name }}
          </span>
          <span class="detail-block__text"> {{ product[0].price }} тг </span>
        </div>
        <div class="detail__divider"></div>
        <div class="detail__summary">
          <span>Итого</span>
          <span>{{ order.total }} тг</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Header from "@/components/Header.vue";
import api from "@/services/api";
import { convertToDate, defineStatus } from "@/helper";

export default {
  name: "MyOrdersDetail",
  components: { Header },
  data() {
    return {
      product: null,
    };
  },
  computed: {
    order() {
      return this.$store.getters.GET_ORDERS.filter((item) => {
        return item.id === this.routeId;
      })[0];
    },
    routeId() {
      return +this.$route.params.id;
    },
  },
  created() {
    this.fetchProduct();
  },
  methods: {
    convertToDate: convertToDate,
    defineStatus: defineStatus,
    async fetchProduct() {
      try {
        const { data } = await api.restaurants.getRestaurant(
          this.order.restaurant_id
        );

        const allProducts = [];
        data.product_categories.forEach((item) =>
          allProducts.push(...item.products)
        );

        this.product = allProducts.filter(
          (item) => item.product_id === this.order.order_details[0].product_id
        );
      } catch (error) {
        console.log("ERROR", error);
      }
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
