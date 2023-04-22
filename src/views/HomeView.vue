<script setup lang="ts">
import Header from "@/components/Header.vue";
import Categories from "@/components/Categories.vue";
import Sort from "@/components/Sort.vue";
import PizzaBlock from "@/components/PizzaBlock.vue";
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
            title="Мексиканская"
            :price="500" />
          <PizzaBlock
            title="Чизбургер-пицца"
            :price="500" />
          <PizzaBlock
            title="Пепперони"
            :price="500" />
          <PizzaBlock
            title="Гавайская"
            :price="500" />
          <PizzaBlock
            title="Четыре сезона"
            :price="500" />
          <PizzaBlock
            title="Сырный цыпленок"
            :price="500" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import "../scss/app.scss";
</style>
