<template>
  <div class="auth-page">
    <h1>Авторизация</h1>
    <login-form/>
  </div>
</template>
<script setup>
import LoginForm from "@/features/login-form/LoginForm.vue";
</script>
<style>
.auth-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 50px;
  gap: 30px;
}
</style>