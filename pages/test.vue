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

      <VyButton
        label="Open Modal"
        class="button--md button--primary button--solid button--rounded text-black"
        @click="$vayu.modal.open('hello')"
      />

      <VyModal name="hello" title="title" class="bg-white">
        <template #default>
          <div class="p-8">This is Body!</div>
        </template>
        <template #footer>
          <div class="p-3">This is Footer</div>
        </template>
      </VyModal>
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
