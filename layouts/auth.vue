<!-- layouts/auth.vue -->
<template>
  <div>
    <ClientOnly>
      <AuthHeader />
      <NuxtPage />
    </ClientOnly>
  </div>
</template>

<script setup>
import { ref } from "vue";

const data = ref("");
</script>
