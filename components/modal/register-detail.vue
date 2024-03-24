<template>
  <VyModal
    name="register-detail"
    title="Please Fill Detail to register"
    class="bg-white rounded max-w-xl md:max-w-3xl max-h-[600px]"
    :closeOnOverlay="false"
  >
    <!-- _class="relative z-50 mx-auto modal-remove-header" -->
    <template #default>
      <div class="flex items-center justify-center">
        <slot name="body" />
      </div>
    </template>
    <template #footer>
      <slot name="footer" />
    </template>
  </VyModal>
</template>
<script setup></script>
