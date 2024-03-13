<!-- pages/login.vue -->
<template>
  <div
    class="flex w-full h-full my-10 items-center justify-center flex-col space-y-2"
  >
    <h1 class="text-2xl font-bold mb-10">Login</h1>
    <form
      @submit.prevent="login"
      class="flex flex-col items-center justify-center p-4 space-y-3 border rounded-md"
    >
      <div>{{ errorMessage }}</div>
      <input v-model="username" type="text" placeholder="Username" />
      <input v-model="password" type="password" placeholder="Password" />
      <button type="submit" class="border p-2 m-2">Login</button>
    </form>
    <GoogleLogin :callback="callback" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import { decodeCredential } from "vue3-google-login";
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
const callback = (response) => {
  console.log("Handle the response", response);
  const userData = decodeCredential(response.credential);
  console.log("userData", userData);
};
</script>
