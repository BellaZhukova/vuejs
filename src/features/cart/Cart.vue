<template>
  <div class="add-cart">
    <p v-if="products < 0">Корзина пустая</p>
    <div class="add-cart__info" v-for="product in products.data" :key="product.id">
      <h3>{{product.name}}</h3>
      <p class="catalog-card__info-description">Описание: {{product.description}}</p>
      <p>Цена: {{product.price}} руб.</p>
      <button @click="deleteProduct(product)">Удалить товар из корзины</button>
      <div>
        <button @click="orderProduct(product)">Оформить заказ</button>
      </div>
    </div>
  </div>
</template>
<script setup>
import {onMounted, ref} from "vue";
import {useCookies} from "vue3-cookies";
const { cookies } = useCookies();
const products = ref([])
const error = ref(false);
async function getResponse() {
  const token = cookies.get('authData')
    const response = await fetch(`${import.meta.env.VITE_API_URL}/cart`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    products.value = data;
}

async function deleteProduct(product) {
  const token = cookies.get('authData');
    const response = await fetch(`${import.meta.env.VITE_API_URL}/cart/${product.id}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    const data = await response.json();
    location.reload();
}

async function orderProduct() {
  const token = cookies.get('authData');
    const response = await fetch(`${import.meta.env.VITE_API_URL}/order`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    const data = await response.json();
}

onMounted(() => {
  getResponse();
});
</script>
<style>
.add-cart {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}
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