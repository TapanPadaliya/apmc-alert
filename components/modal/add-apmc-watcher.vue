<template>
  <VyModal
    name="add-apmc-watcher"
    title="Please Fill Detail to Add Watcher"
    class="bg-white rounded max-w-xl md:max-w-3xl max-h-[600px]"
  >
    <template #default>
      <div class="flex items-center justify-center py-5">
        <VForm @submit="addWatcher" class="flex flex-col space-y-3">
          <!-- first_name -->
          <div class="space-y-5 text-sm text-gray-600 flex flex-col">
            <div>
              <span class="text-grey-400">detail</span>
              <div class="border rounded-md border-gray-400 overflow-hidden">
                <VInput
                  type="text"
                  name="first_name"
                  class="p-2 w-full"
                  rules="required"
                />
              </div>
              <ErrorMessage
                name="first_name"
                class="text-xxs text-red-500 md:text-xs"
              ></ErrorMessage>
            </div>
          </div>
          <!-- Submit Button -->
          <button
            type="submit"
            class="flex items-center justify-center w-full rounded-lg bg-red-500 hover:bg-red-600 py-2 text-white text-md gap-2"
          >
            <span> Submit </span>
          </button>
        </VForm>
      </div>
    </template>
  </VyModal>
</template>
<script setup>
import { useUserStore } from "@/stores/user";
const { $global } = useNuxtApp();
const store = useUserStore();

const addWatcher = (detail) => {
  store.aadToAPMC(detail);
};
</script>
