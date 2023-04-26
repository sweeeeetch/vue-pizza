<script setup lang="ts">
import { RouterLink } from "vue-router";

import Search from "@/components/features/Search.vue";
import { useHomeStore } from "@/stores/homeStore";

const homeStore = useHomeStore();
</script>

<template>
  <div class="header">
    <div class="container">
      <router-link
        to="/"
        class="header__logo">
        <img
          width="38"
          src="/pizza-logo.svg"
          alt="Pizza logo" />
        <div>
          <h1>Vue Pizza</h1>
          <p>самая вкусная пицца во вселенной</p>
        </div>
      </router-link>
      <Search v-if="$route.path !== '/cart'" />
      <div
        class="header__cart"
        v-if="$route.path !== '/cart'">
        <router-link
          to="/cart"
          class="button button--cart">
          <span class="button__price">{{ homeStore.totalPrice }} ₽</span>
          <div class="button__delimiter"></div>
          <img
            src="@/assets/svgs/cart.svg"
            class="header__svg"
            alt="" />
          <span>{{ homeStore.cart.length }}</span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "../scss/variables";

.header {
  border-bottom: 1px solid $gray-line;
  padding: 40px 0;

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__logo {
    display: flex;

    img {
      margin-right: 15px;
    }

    h1 {
      color: #181818;
      font-size: 24px;
      letter-spacing: 1%;
      text-transform: uppercase;
      font-weight: 800;
    }

    p {
      color: #7b7b7b;
    }
  }

  &__svg {
    margin-right: 5px;
  }
}
.button {
  display: block;
  @media (max-width: 680px) {
    padding: 12px 17px;
    min-width: 70px;
    .button__price,
    .button__delimiter {
      display: none;
    }
  }
  @include noselect();
  &--cart {
    display: flex;
    align-items: center;
    line-height: 23px;
    padding: 12px 25px;
    svg {
      margin-right: 8px;
      margin-bottom: 1px;
    }

    span {
      font-weight: 600;
      font-size: 16px;
    }
  }
}
</style>
