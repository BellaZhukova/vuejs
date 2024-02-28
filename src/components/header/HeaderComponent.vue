<template>
  <header >
    <div class="header">
      <div class="header-nav-auth" v-if="authCookieValue">
        <router-link to="/catalog">
          <button class="header-nav-auth__button">каталог</button>
        </router-link>
        <router-link to="/cart">
          <button class="header-nav-auth__button">корзина</button>
        </router-link>
        <button class="header-nav-auth__button" @click="logoutAccount">выход</button>
      </div>
      <div class="header-nav-auth" v-else>
        <router-link to="/auth">
          <button class="header-nav-auth__button">авторизация</button>
        </router-link>
        <router-link to="/registration">
          <button class="header-nav-auth__button">регистрация</button>
        </router-link>
        <router-link to="/catalog">
          <button class="header-nav-auth__button">каталог</button>
        </router-link>
      </div>
    </div>
  </header>
</template>
<script setup>
import {computed, ref} from "vue";
import {useCookies} from "vue3-cookies";
const { cookies } = useCookies();
const authCookieValue = computed(() => cookies.get('authData') || null);
console.log(authCookieValue)

async function logoutAccount() {
  try {
    const token = cookies.get('authData');
    const del = {
      headers: {
        Authorization: `Bearer ${token}`
      }
    };

    const response = await fetch(`${import.meta.env.VITE_API_URL}/logout`, del);
    const data = await response.json();
    cookies.remove('authData');
    location.reload();
    console.log(data)

    console.log(token);
  } catch (error) {
    console.log(error);
  }
}
</script>
<style>
.header {
  display: flex;
  justify-content: center;
  padding-top: 20px;
}
.header-nav-auth {
  display: flex;
  gap: 50px;
}
.header-nav-auth__button {
  height: 25px;
  border: none;
  background-color: white;
  font-size: 20px;
  color: #282828;
}
</style>