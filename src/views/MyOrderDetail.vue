<template>
  <Header isBackIcon="true">Детали заказа</Header>
  <section class="detail main-bg-color">
    <div class="detail__card container">
      <h3 class="detail__title">ChocoCafe</h3>
      <p class="detail__address">1.2 км • Коктем 3-й микрорайон</p>
      <div class="detail__divider"></div>
      <div class="detail-block">
        <p class="detail-block__title">Статус заказа</p>
        <p class="detail-block__text">Завершен</p>
      </div>
      <div class="detail-block">
        <p class="detail-block__title">Дата</p>
        <p class="detail-block__text">22.04.2021, 12:43</p>
      </div>
      <div class="detail-block">
        <p class="detail-block__title">Номер заказа</p>
        <p class="detail-block__text">№3161389</p>
      </div>
    </div>
    <div class="detail__card container">
      <div class="detail-block">
        <p class="detail-block__title">Позиции в заказе</p>
        <div class="detail-block__inner">
          <span class="detail-block__text">1 х Паста спагетти Алио и Олио</span>
          <span class="detail-block__text">3 900 тг</span>
        </div>
        <div class="detail-block__inner">
          <span class="detail-block__text">1 х Паста спагетти Алио и Олио</span>
          <span class="detail-block__text">3 900 тг</span>
        </div>
        <div class="detail__divider"></div>
        <div class="detail__summary">
          <span>Итого</span>
          <span>6 900 тг</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Header from "@/components/Header.vue";

export default {
  components: { Header },
};
</script>

<style>
.detail {
  background: rgba(248, 248, 248, 255);
  height: 100vh;
}

.detail__card {
  background: #fff;
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
  background: #ececec;
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
