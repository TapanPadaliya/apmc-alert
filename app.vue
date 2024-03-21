<template>
  <div>
    <VitePwaManifest />
    <div class="layout-parent">
      <NuxtLayout />
    </div>
    <VyPort
      name="modal"
      has-overlay
      class="port--center p-40 z-50"
      enter-active-class="animate__animated animate__faster animate__fadeIn"
      leave-active-class="animate__animated animate__faster animate__fadeOut"
    />
  </div>
</template>
<script setup></script>
<style>
body {
  --tw-bg-opacity: 1;
  background-color: rgb(243 244 246 / var(--tw-bg-opacity));
}
</style>
