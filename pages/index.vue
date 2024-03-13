<template>
  <div>Home page</div>
</template>
<script setup>
import { decodeCredential } from "vue3-google-login";

definePageMeta({
  //   layout: "private",
});

const callback = (response) => {
  console.log("Handle the response", response);
  const userData = decodeCredential(response.credential);
  console.log("userData", userData);
};
</script>
