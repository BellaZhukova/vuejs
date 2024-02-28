<template>
  <div class="add-cart">
      <div class="add-cart__info" v-for="product in products.data" :key="product.id">
        <p>Номер заказа: {{ product.id }}</p>
        <div v-for="order in product.products" :key="order">
          <p>Код товара в заказе: {{ order }}</p>
        </div>
        <p>Сумма к оплате: {{product.order_price}}</p>
        <button>Оформить заказ</button>
      </div>
    </div>
</template>
<script setup>
import {onMounted, ref} from "vue";
import {useCookies} from "vue3-cookies";
const { cookies } = useCookies();
const products = ref([])
async function getResponse() {
  const token = cookies.get('authData');
  try {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/order`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    console.log(data)
    products.value = data;
  } catch (error) {
    console.log(error);
  }
}
onMounted(
    () => {
      getResponse();
    }
)
</script>
<style>
.add-cart {
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: center;
}
.add-cart__info {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  box-shadow: 4px 8px 61px 2px rgba(34, 60, 80, 0.2);
  width: max-content;
  border-radius: 7px;
  padding: 20px 30px;
}
</style>