<script setup lang="ts">
import Categories from "@/components/Categories.vue";
import Sort from "@/components/Sort.vue";
import PizzaBlock from "@/components/PizzaBlock.vue";
import PizzaSkeleton from "@/components/PizzaSkeleton.vue";
import { onBeforeMount, ref, watchEffect } from "vue";

import { useHomeStore } from "@/stores/homeStore";
const homeStore = useHomeStore();

interface Pizza {
  id: number;
  title: string;
  price: number;
  imageUrl: string;
  sizes: number[];
  types: number[];
}

const pizzas = ref<Pizza[]>([]);
const loading = ref(true);

onBeforeMount(async () => {
  window.scrollTo({ top: 0, left: 0 });
  await fetch("https://6443dc13466f7c2b4b5be5ce.mockapi.io/items")
    .then(data => data.json())
    .then(data => {
      loading.value = false;
      pizzas.value = data;
    });
});

watchEffect(() => {
  loading.value = true;
  const apiUrl = `https://6443dc13466f7c2b4b5be5ce.mockapi.io/items?${
    homeStore.category ? `category=${homeStore.category}` : ""
  }&sortBy=${homeStore.sort.sort}&order=${homeStore.sort.order}`;
  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      loading.value = false;
      pizzas.value = data;
    });
});
</script>

<template>
  <div class="container">
    <div class="content__top">
      <Categories />
      <Sort />
    </div>
    <h2 class="content__title">Все пиццы</h2>
    <div
      class="content__items"
      v-if="loading">
      <PizzaSkeleton
        v-for="pizza in 8"
        class="pizza-block" />
    </div>
    <div
      class="content__items"
      v-else>
      <PizzaBlock
        v-for="pizza in pizzas"
        :key="pizza.id"
        :title="pizza.title"
        :price="pizza.price"
        :image="pizza.imageUrl"
        :sizes="pizza.sizes"
        :dough="pizza.types" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.content {
  &__title {
    font-weight: bold;
    font-size: 32px;
    margin: 35px 0;
  }

  &__items {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 1fr);
    @media (max-width: 1400px) {
      grid-template-columns: repeat(3, 1fr);
    }
    @media (max-width: 1145px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 767px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }

  &__top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media (max-width: 820px) {
      flex-direction: column-reverse;
    }
  }
}
</style>
