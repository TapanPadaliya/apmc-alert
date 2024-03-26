<template>
  <div class="flex items-center justify-center bg-gray-100 h-full">
    <div class="w-full h-full flex items-center justify-center">
      <div class="container">
        <template v-for="(item, i) in watcherList">
          <Section>
            <div>{{ item }}</div>
          </Section>
        </template>
        <!-- <Section>
          <div>Selected Filter</div>
        </Section> -->
        <Section>
          <div>
            <button
              class="border rounded-md border-grey-400 px-2 hover:bg-grey-100"
              @click="addNewWatch"
            >
              <span class="text-xl font-semibold mr-2">+</span> Add New Watcher
            </button>
          </div>
        </Section>
      </div>
    </div>
    <ModalAddApmcWatcher />
  </div>
</template>
<script setup>
import { useUserStore } from "@/stores/user";
import { ref, onMounted } from "vue";
const { $global } = useNuxtApp();
const store = useUserStore();

definePageMeta({
  //   layout: "private",
});

const watcherList = computed(() => {
  return store.getApmc;
});

const addNewWatch = () => {
  $global.$vayu.modal.open("add-apmc-watcher");
};
</script>
