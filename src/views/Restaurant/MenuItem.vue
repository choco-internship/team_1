<template>
  <div class="product">
    <div class="product__decription">
      <div class="product__title">{{ product.product_name }}</div>
      <div class="product__price">{{ product.price }}</div>
    </div>
    <div v-if="product.image" class="product__image">
      <img
        class="product__image-tag"
        :src="product.image"
        :alt="product.product_name"
      />
      <div class="product__controll">
        <button v-if="amount > 0" class="product__btn" @click="removeFromCart">
          &minus;
        </button>
        <span v-if="amount > 0" class="product__amount">{{ amount }}</span>
        <button class="product__btn" @click="addToCart">&plus;</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RestaurantMenu",
  data() {
    return {
      amount: 0,
    };
  },
  props: {
    restaurant_id: {
      type: String,
    },
    product: {
      product_id: {
        type: Number,
      },
      product_name: {
        type: String,
      },
      description: {
        type: String,
      },
      price: {
        type: Number,
      },
      image: {
        type: String,
      },
    },
  },
  methods: {
    addToCart() {
      this.amount += 1;
      this.$store.dispatch("addProductToCart", {
        ...this.product,
        restaurant_id: this.restaurant_id,
      });
    },
    removeFromCart() {
      this.amount -= 1;
      this.$store.dispatch("removeProductFromCart", {
        ...this.product,
        restaurant_id: this.restaurant_id,
      });
    },
  },
};
</script>

<style scoped>
.product {
  width: 100%;
  display: flex;
  padding: 12px 0;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #ececec;
}
.product__description {
  font-size: 14px;
  line-height: 16px;
}
.product__title {
  font-weight: 500;
  color: #303030;
  margin-bottom: 8px;
}
.product__price {
  color: #2997ff;
}
.product__image {
  position: relative;
}
.product__image-tag {
  max-width: 120px;
  height: 90px;
}
.product__controll {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  position: absolute;
  bottom: 9px;
  right: 4px;
  padding: 5px 12px;
  background-color: #ffffff;
  box-shadow: 1px 2px 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
}
.product__btn {
  font-size: 22px;
  line-height: 26px;
  color: #2997ff;
  background-color: transparent;
}
.product__amount {
  margin: 0 20px;
  color: #131113;
  font-size: 16px;
  line-height: 20px;
}
</style>
