<!-- pages/login.vue -->
<template>
  <div
    class="flex w-full h-full my-10 items-center justify-center flex-col space-y-2"
  >
    <h1 class="text-2xl font-bold mb-10">Login</h1>
    <GoogleLogin :callback="callback" />
  </div>
</template>

<script setup>
import { decodeCredential } from "vue3-google-login";
const router = useRouter();

definePageMeta({
  layout: "auth",
});

const callback = (response) => {
  const userData = decodeCredential(response?.credential);
  if (userData?.email) {
    localStorage.setItem("token", userData?.email);
    router.push("/");
  }
};
</script>
