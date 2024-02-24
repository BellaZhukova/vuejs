<template>
  <header >
    <div class="header">
      <div class="header-nav-auth" v-if="authCookieValue">
        <router-link to="/catalog">
          <button>каталог</button>
        </router-link>
        <button>выход</button>
      </div>
      <div class="header-nav" v-else>
        <router-link to="/auth">
          <button>авторизация</button>
        </router-link>
        <router-link to="/registration">
          <button>регистрация</button>
        </router-link>
        <router-link to="/catalog">
          <button>каталог</button>
        </router-link>
      </div>
    </div>
  </header>
</template>
<script setup>
import {computed} from "vue";
import {useCookies} from "vue3-cookies";
const { cookies } = useCookies();
const authCookieValue = computed(() => cookies.get('authData') || null);
console.log(authCookieValue)
</script>
<style></style>