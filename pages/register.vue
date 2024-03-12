<!-- pages/register.vue -->
<template>
  <div>
    <h1>Register</h1>
    <form @submit.prevent="register">
      <div>{{ errorMessage }}</div>
      <input v-model="username" type="text" placeholder="Username" />
      <input v-model="password" type="password" placeholder="Password" />
      <button type="submit">Register</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";

const username = ref("");
const password = ref("");
const errorMessage = ref("");

const register = async () => {
  try {
    const response = await axios.post("/api/register", {
      username: username.value,
      password: password.value,
    });
    localStorage.setItem("token", response.data.token);
    // Redirect to private page after successful registration
    $nuxt.$router.push("/");
  } catch (error) {
    errorMessage.value = "Registration failed";
  }
};
</script>
