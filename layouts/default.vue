<template>
  <div>
    <div class="w-full bg-gray-200 p-5 flex items-center justify-between">
      <div class="text-xl font-bold">APMC Alert</div>
      <div>
        <button
          @click="logout"
          class="m-2 p-2 border rounded-md hover:bg-gray-400"
        >
          Logout
        </button>
      </div>
    </div>
    <div>
      <NuxtPage />
    </div>
  </div>
</template>
<script setup>
const router = useRouter();
const logout = () => {
  localStorage.clear();
  router.push("/login");
};
</script>
