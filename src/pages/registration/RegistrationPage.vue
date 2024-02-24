<template>
  <div class="registration-page">
    <h1>Зарегистрироваться</h1>
    <registration-form></registration-form>
  </div>
</template>
<script setup>
import RegistrationForm from "@/features/registration-form/RegistrationForm.vue";
</script>
<style>
.registration-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 50px;
  gap: 30px;
}
</style>