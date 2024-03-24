<template>
  <div>
    <VitePwaManifest />
    <div class="layout-parent">
      <NuxtLayout />
    </div>
    <ClientOnly>
      <VyPort
        name="modal"
        has-overlay
        class="port--center z-50 items-center"
        enter-active-class="animate__animated animate__faster animate__fadeIn"
        leave-active-class="animate__animated animate__faster animate__fadeOut"
      />
      <VyNotificationPort
        name="toast"
        class="port--right port--bottom space-y-2 pb-8"
        enter-active-class="animate__animated animate__faster animate__fadeInUp"
        leave-active-class="animate__animated animate__faster animate__fadeOutUp"
      />
      <ModalLangSwitch />
    </ClientOnly>
  </div>
</template>
<script setup></script>
<style>
body {
  --tw-bg-opacity: 1;
  background-color: rgb(243 244 246 / var(--tw-bg-opacity));
  font-family: Jakarta Sans, sans-serif;
}
</style>
