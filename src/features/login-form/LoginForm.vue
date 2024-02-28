<template>
  <form class="login-form">
    <div class="login-form__auth">
      <input placeholder="Введите логин" class="login-form__input" v-model="model.email">
      <input placeholder="Введите пароль" class="login-form__input" v-model="model.password" type="password">
    </div>
    <router-link to="/">
      <button @click="loginPostRequest" class="login-form__button">Авторизироваться</button>
    </router-link>
    <router-link to="/registration">
      <p>Ещё не зарегистрированы?</p>
    </router-link>
  </form>
</template>
<script setup>
  import {ref} from "vue";
  import {useCookies} from "vue3-cookies";
  const { cookies } = useCookies();

  const model = ref({
      email: '',
      password: '',
  })

  const isLoading = ref(false);
  const data = ref([]);

  async function loginPostRequest() {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/login`, {
        method: 'POST',
        body: JSON.stringify(
            {
              email: model.value.email,
              password: model.value.password
            }
        ),
        headers: {
          'Content-Type': 'application/json'
        },
      });


      const resultData = await response.json();
      data.value = resultData;
      console.log(data);

      const userToken = resultData.data?.user_token;
      console.log(userToken);
      cookies.set('authData', userToken);
      location.reload();

      console.log(resultData);
    } catch (error) {
      error.value = error;
      isLoading.value = false;
    }
  }


</script>
<style>
.login-form {
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
.login-form__auth {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.login-form__input {
  width: 200px;
  height: 40px;
  border-radius: 7px;
  border: 1px solid rgba(34, 60, 80, 0.2);
  padding-left: 10px;
}
.login-form__button {
  padding: 5px 10px;
  background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(65,212,193,1) 0%, rgba(0,212,255,1) 100%);
  border-radius: 7px;
  border: none;
}
</style>