<!-- pages/login.vue -->
<template>
  <div>
    <h1>Login</h1>
    <form @submit.prevent="login">
      <div>{{ errorMessage }}</div>
      <input v-model="username" type="text" placeholder="Username" />
      <input v-model="password" type="password" placeholder="Password" />
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";

const username = ref("");
const password = ref("");
const errorMessage = ref("");

const login = async () => {
  try {
    // const response = await axios.post("/api/login", {
    //   username: username.value,
    //   password: password.value,
    // });
    localStorage.setItem("token", "response.data.token");
    // Redirect to private page after successful login
    // $nuxt.$router.push("/");
  } catch (error) {
    // errorMessage.value = "Invalid credentials";
    console.log(error);
  }
};
</script>
