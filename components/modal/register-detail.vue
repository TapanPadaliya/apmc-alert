<template>
  <VyModal
    name="register-detail"
    title="Please Fill Detail to register"
    class="bg-white rounded"
  >
    <template #default>
      <slot name="body" />
    </template>
    <template #footer>
      <slot name="footer" />
    </template>
  </VyModal>
</template>
<script setup></script>
