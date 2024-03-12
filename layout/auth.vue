<!-- layouts/auth.vue -->
<template>
  <div>
    <p>Auth Layout</p>
    <slot></slot>
  </div>
</template>

<script setup>
import { ref } from "vue";

const data = ref("");
</script>
