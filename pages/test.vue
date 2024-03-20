<template>
  <div class="my-10 text-center text-xl font-semibold">
    <ClientOnly>
      <VyCopy />
      <div class="flex justify-center">
        <input v-model="written" class="p-2 border" />
        <VyButton
          label="Copy Text"
          class="button--success button--solid button--md border p-6"
          @click="copyText()"
        ></VyButton>
      </div>

      <VyNotificationPort
        name="toast"
        class="port--center port--bottom space-y-2 pb-8"
        enter-active-class="animate__animated animate__faster animate__fadeInUp"
        leave-active-class="animate__animated animate__faster animate__fadeOutUp"
      />
    </ClientOnly>
  </div>
</template>
<script setup>
import { ref } from "vue";
const { $global } = useNuxtApp();
const written = ref(null);
const copyText = () => {
  $global.$vayu.copy(written);
  $global.$vayu.notify({
    port: "toast",
    title: "Text Copied",
    duration: 1500,
    state: "success",
  });
  console.log("$global.$vayu", $global.$vayu);
};
</script>
