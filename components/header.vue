<template>
  <div
    class="header flex w-full items-center justify-center bg-gradient-to-r from-indigo-400 to-blue-400"
  >
    <div class="flex items-center justify-between container mx-8">
      <div class="text-2xl font-semibold flex text-white items-center gap-2">
        <img
          src="/logo.png"
          class="h-10 w-10 rounded-md border border-indigo-500 p-1"
        /><span class="hidden md:flex">APMC Alert</span>
      </div>
      <button
        @click="logout"
        class="m-2 p-2 border rounded-md hover:bg-gradient-to-l from-blue-400 to-indigo-400 text-white"
      >
        Logout
      </button>
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
