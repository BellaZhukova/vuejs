<template>
  <form class="registration-form">
    <p v-if="error">Неверно заполнены поля</p>
    <div class="registration-form__registration">
      <input placeholder="Придумайте логин" class="registration-form__input" v-model="model.fio">
      <input placeholder="Введите свою почту" class="registration-form__input" type="email" v-model="model.email">
      <input placeholder="Придумайте пароль" class="registration-form__input" type="password" v-model="model.password">
    </div>
    <router-link to="/auth"><button @click="registrationPostRequest" class="button-registration">Зарегистрироваться</button></router-link>
    <router-link to="/auth">
      <p>Уже зарегистрированны?</p>
    </router-link>
  </form>
</template>
<script setup>
import {ref} from "vue";

const model = ref({
  fio: '',
  email: '',
  password: '',
})
const isLoading = ref(false);
const data = ref([]);
const error = ref(false);

async function registrationPostRequest() {
  try {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/signup`, {
      method: 'POST',
      body: JSON.stringify(
          {
            fio: model.value.fio,
            email: model.value.email,
            password: model.value.password
          }
      ),
      headers: {
        'Content-Type': 'application/json'
      },
    });

    if (!response.ok) {
      if (response.status === 422) {
        const errorText = await response.text(); // Получаем текст ошибки из ответа
        error.value = true; // Устанавливаем значение error в true при ошибке
        console.error(`Ошибка 422: ${errorText}`); // Выводим текст ошибки в консоль
        return;
      }
    }


    const resultData = await response.json();
    data.value = resultData;
    console.log(data);

    console.log(resultData);
  } catch (error) {
    error.value = true;
    isLoading.value = false;
    console.error(error);
  }
}

</script>
<style>
.registration-form {
  padding: 20px 30px;
  box-shadow: 4px 8px 61px 2px rgba(34, 60, 80, 0.2);
  border-radius: 7px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: max-content;
  justify-content: center;
  align-items: center;
}
.registration-form__registration {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.registration-form__input {
  width: 200px;
  height: 40px;
  border-radius: 7px;
  border: 1px solid rgba(34, 60, 80, 0.2);
  padding-left: 10px;
}
.button-registration {
  padding: 5px 10px;
  background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(65,212,193,1) 0%, rgba(0,212,255,1) 100%);
  border-radius: 7px;
  border: none;
}
</style>