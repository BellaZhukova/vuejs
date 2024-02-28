<template>
  <div class="catalog">
    <h1>Каталог</h1>
    <div class="catalog-card">
    <div class="catalog-card__info" v-for="product in products.data" :key="product.id">
      <h3>{{product.name}}</h3>
      <p class="catalog-card__info-description">Описание: {{product.description}}</p>
      <p>Цена: {{product.price}} руб.</p>
      <p>Код товара: {{product.id}}</p>
      <div class="catalog-card__button">
        <button @click="cartPostRequest(product)" >Добавить в корзину</button>
      </div>
    </div>
  </div>
  </div>
</template>
<script setup>

import {onMounted, ref} from "vue";
import {useCookies} from "vue3-cookies";
const { cookies } = useCookies();


const products = ref([])


let cart = ref([])

async function getResponse() {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/products`);
    const data = await response.json();
    products.value = data;
}

async function cartPostRequest(product) {
  const token = cookies.get('authData');
    const response = await fetch(`${import.meta.env.VITE_API_URL}/cart/${product.id}`, {
      method: 'POST',
      headers: {
         Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({
        id: product.id,
      })
    });

    const data = await response.json();
}



onMounted(() => {
  getResponse();
  cartPostRequest();
});
</script>
<style>
.catalog {
text-align: center;
}
.catalog-card {
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}
.catalog-card__info {
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
.catalog-card__info-description {
  text-overflow: clip;
}
</style>