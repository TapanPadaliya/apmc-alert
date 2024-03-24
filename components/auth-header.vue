<template>
  <div
    class="header flex w-full items-center justify-center bg-gradient-to-r from-indigo-400 to-blue-400"
  >
    <div class="flex items-center justify-between container md:mx-6 p-2">
      <div
        class="text-xl md:text-2xl font-semibold flex text-white items-center gap-2"
      >
        <img
          src="/logo.png"
          class="h-10 w-10 rounded-md border border-white p-1"
        /><span class="text-white drop-shadow-xl font-chakra-petch">APMC Alert</span>
      </div>
      <div class="flex gap-1 md:gap-2">
        <!-- Language Changer Button -->
        <button
          @click="changelanguage"
          class="flex p-1 border items-center gap-2 rounded-md hover:bg-gradient-to-l from-blue-400 to-indigo-400 text-white"
        >
          <IconsLanguage class="h-5 w-5" />
        </button>
        <button
          @click="openInfoModal"
          class="flex p-1 border items-center gap-2 rounded-md hover:bg-gradient-to-l from-blue-400 to-indigo-400 text-white"
        >
          <IconsInfo class="h-5 w-5" />
        </button>
      </div>
    </div>
  </div>
</template>
<script setup>
const { $global } = useNuxtApp();
const changelanguage = () => {
  $global.$vayu.modal.open("lang-switch");
  console.log("click", $global.$vayu.modal.open("langswitch"));
};
const openInfoModal = () => {
  console.log("Open openInfoModal Modal");
};
</script>
