<template>
  <div v-show="isOpen" class="overlay" @click="closeModal">
    <div class="modal" @click.stop>
      <button class="modal__close" @click="closeModal">&times;</button>
      <div class="modal__inner">
        <div class="modal__img-wrapper">
          <img
            class="modal__img"
            :src="require(`@/assets/images/${icon}.svg`)"
            alt=""
          />
        </div>
        <p class="modal__text">{{ text }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Modal",
  props: {
    text: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: true,
    },
  },
  computed: {
    isOpen() {
      return this.$store.getters.GET_IS_MODAL_OPEN;
    },
  },
  methods: {
    closeModal() {
      this.$store.commit("SET_IS_MODAL_OPEN", !this.isOpen);
    },
  },
};
</script>

<style>
.modal {
  position: relative;
  max-width: 375px;
  width: 80%;
  padding: 16px;
  background: #fff;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  border-radius: 10px;
}

.modal__inner {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.modal__close {
  position: absolute;
  top: 0;
  right: 12px;
  font-size: 30px;
  background: none;
}

.modal__img-wrapper {
  margin-bottom: 10px;
}

.modal__img {
  width: 40px;
  height: 40px;
}

.modal__text {
  text-align: center;
}
</style>
