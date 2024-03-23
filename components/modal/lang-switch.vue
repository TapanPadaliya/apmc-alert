<template>
  <VyModal
    name="langswitch"
    title="Choose Language"
    class="bg-white rounded max-w-96 max-h-96 lang-switch"
  >
    <template #default>
      <div class="flex gap-2 flex-col items-center justify-center h-full">
        <p>Please Select Language</p>
        <div class="flex items-center justify-center flex-col space-y-2">
          <button
            @click="setLocale(lang.code)"
            :disabled="lang.code == locale"
            v-for="lang in allLanguages"
            :key="lang"
            class="px-2 py-1 rounded border"
            :class="
              lang.code == locale
                ? 'hover:cursor-not-allowed bg-grey-100 hover:bg-grey-200'
                : 'bg-blue-100 border-blue-400'
            "
          >
            {{ lang.name }}
          </button>
        </div>
      </div>
    </template>
  </VyModal>
</template>
<script setup>
const { locale, setLocale } = useI18n();
const allLanguages = [
  {
    code: "en",
    name: "English",
  },
  {
    code: "gj",
    name: "Gujarati",
  },
  {
    code: "hi",
    name: "Hindi",
  },
];
</script>
<style>
.lang-switch .modal__body {
  height: 100%;
}
</style>
