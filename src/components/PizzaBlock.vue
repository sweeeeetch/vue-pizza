<script setup lang="ts">
import MyButton from "@/components/buttons/MyButton.vue";
import { ref } from "vue";

const props = defineProps({
  title: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true },
  sizes: { type: Array, required: true },
  dough: { type: Array, required: true },
});

const doughNames = ["тонкое", "традиционное"];

const activeSize = ref(0);
const activeDough = ref(0);
</script>

<template>
  <div class="pizza-block">
    <img
      class="pizza-block__image"
      :src="image"
      alt="Pizza" />
    <h4 class="pizza-block__title">{{ title }}</h4>
    <div class="pizza-block__selector">
      <ul>
        <li
          v-for="(item, index) in dough"
          :class="{ active: activeDough === index }"
          @click="activeDough = index">
          {{ doughNames[item as any] }}
        </li>
      </ul>
      <ul>
        <li
          v-for="(size, index) in sizes"
          :class="{ active: activeSize === index }"
          @click="activeSize = index">
          {{ size }} см.
        </li>
      </ul>
    </div>
    <div class="pizza-block__bottom">
      <div class="pizza-block__price">от {{ price }} ₽</div>
      <my-button>Добавить</my-button>
    </div>
  </div>
</template>

<style lang="scss">
@import "../scss/variables";

.pizza-block {
  width: 280px;
  text-align: center;
  margin-bottom: 65px;
  // @media (max-width: 1400px) {
  align-self: center;
  justify-self: center;
  // }

  &__image {
    width: 260px;
  }

  &__title {
    font-size: 20px;
    font-weight: 900;
    letter-spacing: 1%;
    margin-bottom: 20px;
  }

  &__selector {
    display: flex;
    background-color: #f3f3f3;
    border-radius: 10px;
    flex-direction: column;
    padding: 6px;

    ul {
      display: flex;
      flex: 1;

      &:first-of-type {
        margin-bottom: 6px;
      }

      li {
        padding: 8px;
        flex: 1;
        cursor: pointer;
        font-weight: 600;
        font-size: 14px;
        @include noselect();
        &.active {
          background: #ffffff;
          box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.04);
          border-radius: 5px;
          cursor: auto;
        }
      }
    }
  }

  &__bottom {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 20px;
  }

  &__price {
    font-weight: bold;
    font-size: 22px;
    line-height: 27px;
    letter-spacing: 0.015em;
  }
}
</style>
