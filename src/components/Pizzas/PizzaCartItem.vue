<script setup lang="ts">
import type { PropType } from "vue";

import { useHomeStore, type CartPizza } from "@/stores/homeStore";
const homeStore = useHomeStore();

const props = defineProps({
  pizza: { type: Object as PropType<CartPizza>, required: true },
});

const incrementPizza = () => {
  props.pizza.count!++;
  homeStore.totalPrice += props.pizza.price;
};
const decrementPizza = () => {
  if (props.pizza.count !== 1) {
    props.pizza.count!--;
    homeStore.totalPrice -= props.pizza.price;
  } else {
    homeStore.removeItem(props.pizza);
  }
};

const removePizza = () => {
  homeStore.removeItem(props.pizza);
};
</script>

<template>
  <div class="cart__item">
    <div class="cart__item-img">
      <img
        class="pizza-block__image"
        :src="pizza.imageUrl"
        alt="Pizza" />
    </div>
    <div class="cart__item-info">
      <h3>{{ pizza.title }}</h3>
      <p>{{ pizza.activeType }} тесто, {{ pizza.activeSize }} см.</p>
    </div>
    <div class="cart__item-count">
      <div
        class="button button--outline button--circle cart__item-count-minus"
        @click="decrementPizza">
        <svg
          width="10"
          height="10"
          viewBox="0 0 10 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z"
            fill="#EB5A1E" />
        </svg>
      </div>
      <b>{{ pizza.count }}</b>
      <div
        class="button button--outline button--circle cart__item-count-plus"
        @click="incrementPizza">
        <svg
          width="10"
          height="10"
          viewBox="0 0 10 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z"
            fill="#EB5A1E" />
          <path
            d="M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z"
            fill="#EB5A1E" />
        </svg>
      </div>
    </div>
    <div class="cart__item-price">
      <b>{{ pizza.price * pizza.count! }} ₽</b>
    </div>
    <div class="cart__item-remove">
      <div
        class="button button--outline button--circle"
        @click="removePizza">
        <svg
          width="10"
          height="10"
          viewBox="0 0 10 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z"
            fill="#EB5A1E" />
          <path
            d="M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z"
            fill="#EB5A1E" />
        </svg>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import "@/scss/variables";
.cart__item {
  display: flex;
  width: 100%;
  border-top: 1px solid $gray-line;
  padding-top: 30px;
  margin-top: 30px;

  &-img {
    display: flex;
    align-items: center;
    margin-right: 15px;
    width: 10%;

    img {
      width: 80px;
      height: 80px;
    }
  }

  &-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 40%;

    h3 {
      font-weight: bold;
      font-size: 22px;
      line-height: 27px;
      letter-spacing: 0.01em;
    }

    p {
      font-size: 18px;
      color: #8d8d8d;
    }
  }

  &-count {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 13%;

    b {
      font-size: 22px;
    }
  }

  &-price {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 33%;

    b {
      font-weight: bold;
      font-size: 22px;
      letter-spacing: 0.01em;
    }
  }

  &-remove {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 4%;

    .button {
      border-color: darken($color: $gray-line, $amount: 10);
    }

    svg {
      transform: rotate(45deg);

      path {
        fill: darken($color: $gray-line, $amount: 15);
      }
    }

    .button {
      svg {
        width: 11.5px;
        height: 11.5px;
        position: relative;
      }
      &:hover,
      &:active {
        border-color: darken($color: $gray-line, $amount: 80);
        background-color: darken($color: $gray-line, $amount: 80);
      }
    }
  }
}
</style>
