<script setup lang="ts"></script>

<template>
  <div class="cart__item">
    <div class="cart__item-img">
      <img
        class="pizza-block__image"
        src="https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg"
        alt="Pizza" />
    </div>
    <div class="cart__item-info">
      <h3>Сырный цыпленок</h3>
      <p>тонкое тесто, 26 см.</p>
    </div>
    <div class="cart__item-count">
      <div class="button button--outline button--circle cart__item-count-minus">
        <img
          src="@/assets/svgs/circle-minus.svg"
          alt="" />
      </div>
      <b>2</b>
      <div class="button button--outline button--circle cart__item-count-plus">
        <img
          src="@/assets/svgs/circle-pus.svg"
          alt="" />
      </div>
    </div>
    <div class="cart__item-price">
      <b>770 ₽</b>
    </div>
    <div class="cart__item-remove">
      <div class="button button--outline button--circle">
        <img
          src="@/assets/svgs/circle-remove.svg"
          alt="" />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
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

    &-minus {
      svg {
        path:first-of-type {
          display: none;
        }
      }
    }

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
