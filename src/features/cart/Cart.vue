<template>
  <div class="add-cart">
    <div class="add-cart__info" v-for="product in products.data" :key="product">
      <h3>{{product.name}}</h3>
      <p class="catalog-card__info-description">Описание: {{product.description}}</p>
      <p>Цена: {{product.price}} руб.</p>
    </div>
  </div>
</template>
<script setup>
import {onMounted, ref} from "vue";
import {useRoute} from "vue-router";
const route = useRoute();
const products = ref([])
async function getResponse() {
  try {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/cart/id`);
    const data = await response.json();
    console.log(data)
    products.value = data;
  } catch (error) {
    console.log(error);
  }
}

onMounted(() => {
  getResponse();
});
</script>
<style>
.add-cart__info {
  text-overflow: clip;
  width: 300px;
  height: 370px;
  padding: 20px 30px;
  box-shadow: 4px 8px 61px 2px rgba(34, 60, 80, 0.2);
  border-radius: 7px;
  display: flex;
  gap: 5px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>