<template>
  <div class="order-page">
    <HeaderComponent></HeaderComponent>
    <Order></Order>
  </div>
</template>
<script setup>
import Order from "@/features/order/Order.vue";
import HeaderComponent from "@/components/header/HeaderComponent.vue";
</script>
<style>
.order-page {
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  align-items: center;
}
</style>