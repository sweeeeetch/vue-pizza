<script setup lang="ts">
import Categories from "@/components/Categories.vue";
import Sort from "@/components/Sort.vue";
import PizzaBlock from "@/components/PizzaBlock.vue";
import PizzaSkeleton from "@/components/PizzaSkeleton.vue";
import { onBeforeMount, ref } from "vue";

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
  await fetch("https://6443dc13466f7c2b4b5be5ce.mockapi.io/items")
    .then(data => data.json())
    .then(data => {
      loading.value = false;
      pizzas.value = data;
    });
});
</script>

<template>
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
</template>

<style lang="scss">
.content {
  &__title {
    margin: 35px 0;
  }

  &__items {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 1fr);
    @media (max-width: 1400px) {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  &__top {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}
</style>
