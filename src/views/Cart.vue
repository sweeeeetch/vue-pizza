<script setup lang="ts">
import CartItem from "@/components/CartItem.vue";
import { RouterLink } from "vue-router";
</script>

<template>
  <div class="container container--cart">
    <div class="cart">
      <div class="cart__top">
        <h2 class="content__title">
          <img
            src="@/assets/svgs/cart.svg"
            alt="" />
          Корзина
        </h2>
        <div class="cart__clear">
          <img
            src="@/assets/svgs/trash.svg"
            alt="" />

          <span>Очистить корзину</span>
        </div>
      </div>
      <div class="content__items">
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
      </div>
      <div class="cart__bottom">
        <div class="cart__bottom-details">
          <span> Всего пицц: <b>3 шт.</b> </span>
          <span> Сумма заказа: <b>900 ₽</b> </span>
        </div>
        <div class="cart__bottom-buttons">
          <router-link
            to="/"
            class="button button--outline button--add go-back-btn">
            <svg
              width="8"
              height="14"
              viewBox="0 0 8 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M7 13L1 6.93015L6.86175 1"
                stroke="#D3D3D3"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round" />
            </svg>

            <span>Вернуться назад</span>
          </router-link>
          <div class="button pay-btn">
            <span>Оплатить сейчас</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import "@/scss/variables";
.container--cart {
  max-width: 820px;
  margin: 90px auto;
  .content__title {
    margin: 0;
  }
}

.cart {
  &__top {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .content__title {
    display: flex;
    align-items: center;
    font-size: 32px;

    svg {
      position: relative;
      top: -2px;
      width: 30px;
      height: 30px;
      margin-right: 10px;
      path {
        stroke: $black;
        stroke-width: 1.9;
      }
    }
  }

  &__clear {
    display: flex;
    align-items: center;
    cursor: pointer;
    @include noselect();

    span {
      display: inline-block;
      margin-left: 7px;
      color: #b6b6b6;
      font-size: 18px;
    }

    span,
    svg,
    path {
      transition: all $duration ease-in-out;
    }

    &:hover {
      svg {
        path {
          stroke: darken($color: #b6b6b6, $amount: 50);
        }
      }
      span {
        color: darken($color: #b6b6b6, $amount: 50);
      }
    }
  }

  &__bottom {
    margin: 50px 0;

    &-details {
      display: flex;
      justify-content: space-between;

      span {
        font-size: 22px;

        &:last-of-type {
          b {
            color: $orange;
          }
        }
      }
    }

    &-buttons {
      display: flex;
      justify-content: space-between;
      margin-top: 40px;

      .go-back-btn {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 210px;

        border-color: darken($color: $gray-line, $amount: 10);

        span {
          color: darken($color: $gray-line, $amount: 20);
          font-weight: 500;
          font-weight: 600;
        }

        &:hover {
          background-color: darken($color: $gray-line, $amount: 90);
          border-color: darken($color: $gray-line, $amount: 90);

          span {
            color: $gray-line;
          }
        }

        svg {
          margin-right: 12px;
          path {
            fill: transparent;
            stroke-width: 2;
          }
        }
      }

      .pay-btn {
        font-size: 16px;
        font-weight: 600;
        width: 210px;
        padding: 16px;
      }
    }
  }

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

    icon {
      position: relative;
      top: 2px;
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
