<script setup lang="ts"></script>

<template>
  <div class="cart cart--empty">
    <h2>Корзина пустая 😕</h2>
    <p>
      Вероятней всего, вы не заказывали ещё пиццу.<br />
      Для того, чтобы заказать пиццу, перейди на главную страницу.
    </p>
    <img
      src="@/assets/img/empty-cart.png"
      alt="Empty cart" />
    <router-link
      to="/"
      class="button button--black">
      <span>Вернуться назад</span>
    </router-link>
  </div>
</template>

<style lang="scss">
.cart {
  &--empty {
    margin: 0 auto;
    width: 560px;
    text-align: center;

    h2 {
      font-size: 32px;
      margin-bottom: 10px;
    }

    p {
      font-size: 18px;
      line-height: 145.4%;
      letter-spacing: 0.01em;
      color: #777777;
    }

    img {
      display: block;
      width: 300px;
      margin: 45px auto 60px;
    }

    .button--black {
      padding: 12px 0 14px;
      width: 230px;
      margin: 0 auto;
      font-weight: 600;
      font-size: 18px;
    }
  }
}
</style>
