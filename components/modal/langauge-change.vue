<template>
  <VyModal name="logout-modal" title="title" class="bg-white">
    <template #default>
      <slot name="body" />
    </template>
    <template #footer>
      <slot name="footer" />
    </template>
  </VyModal>
</template>
<script setup></script>
