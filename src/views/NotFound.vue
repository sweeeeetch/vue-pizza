<script setup lang="ts"></script>

<template>
  <div class="notFound">
    <h1><span>🙁</span><br />Ничего не найдено</h1>
    <p class="notFound__description">
      К сожалению, запрашиваемая вами страница отсутствует в нашем интернет магазине.
    </p>
  </div>
</template>

<style lang="scss">
.notFound {
  padding: 100px;
  text-align: center;
  span {
    font-size: 64px;
  }
  &__description {
    font-size: 22px;
  }
}
</style>
