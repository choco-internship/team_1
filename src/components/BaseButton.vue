<template>
  <button class="btn btn--primary" :disabled="disabled">
    <span
      v-if="amount"
      :class="`btn__info btn__info--amount ${
        contentDisabled ? 'btn__info--disabled' : ''
      }`"
    >
      {{ amount }} шт.
    </span>
    <span class="btn__text">
      <slot></slot>
    </span>
    <span
      v-if="price"
      :class="`btn__info btn__info--price ${
        contentDisabled ? 'btn__info--disabled' : ''
      }`"
    >
      {{ price }} ₸
    </span>
  </button>
</template>

<script>
export default {
  name: "BaseButton",
  props: {
    disabled: {
      type: Boolean,
      required: false,
      default: false,
    },
    amount: {
      type: [String, Number],
      required: false,
    },
    price: {
      type: [String, Number],
      required: false,
    },
    contentDisabled: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
};
</script>

<style scoped>
.btn {
  position: relative;
  width: 100%;
  max-width: 375px;
  border-radius: 12px;
  padding: 16px 0px;
  margin-bottom: 24px;
  font-size: 14px;
  font-weight: bold;
  color: #ffffff;
  line-height: 19px;
  user-select: none;
  border: none;
  cursor: pointer;
}

.btn--primary {
  background: #2997ff;
}

.btn:disabled {
  pointer-events: none;
  opacity: 0.5;
}

.btn__info {
  position: absolute;
}

.btn__info--price {
  right: 16px;
}

.btn__info--amount {
  left: 16px;
}

.btn__info--disabled {
  opacity: 0.5;
}
</style>
