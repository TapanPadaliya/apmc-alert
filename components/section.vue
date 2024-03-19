<template>
  <section class="m-4 p-4 rounded-md section-shadow bg-white">
    <slot />
  </section>
</template>
<script setup></script>
<style>
.section-shadow {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 12px 28px 0px,
    rgba(0, 0, 0, 0.1) 0px 2px 4px 0px,
    rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset;
}
</style>
