<script setup lang="ts">
import Header from "@/components/Header.vue";
import Categories from "@/components/Categories.vue";
import Sort from "@/components/Sort.vue";
import PizzaBlock from "@/components/PizzaBlock.vue";
import pizzas from "@/assets/pizzas.json";

console.log(pizzas);
</script>

<template>
  <div class="wrapper">
    <Header />
    <div class="content">
      <div class="container">
        <div class="content__top">
          <Categories />
          <Sort />
        </div>
        <h2 class="content__title">Все пиццы</h2>
        <div class="content__items">
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
    </div>
  </div>
</template>

<style lang="scss">
@import "../scss/app.scss";
</style>
