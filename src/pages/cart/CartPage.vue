<template>
  <div class="cart-page">
    <HeaderComponent></HeaderComponent>
    <h1>Корзина</h1>
    <Cart></Cart>
  </div>
</template>
<script setup>
import Cart from "@/features/cart/Cart.vue";
import HeaderComponent from "@/components/header/HeaderComponent.vue";
</script>
<style>
.cart-page {
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 20px;
}
</style>