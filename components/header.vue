<template>
  <div
    class="header flex w-full items-center justify-center bg-gradient-to-r from-indigo-400 to-blue-400"
  >
    <div class="flex items-center justify-between container md:mx-6 p-2">
      <button
        class="flex gap-2 items-center justify-center"
        @click="showUserInfo"
      >
        <img
          src=""
          alt="user_image"
          class="h-8 w-8 rounded-md border border-white"
        />
        <span class="hidden md:flex text-white"> User Name </span>
      </button>
      <div class="text-2xl font-semibold flex text-white items-center gap-2">
        <img
          src="/logo.png"
          class="h-10 w-10 rounded-md border border-indigo-500 md:border-white p-1"
        /><span class="hidden md:flex drop-shadow-xl">APMC Alert</span>
      </div>
      <div class="flex gap-1 md:gap-2">
        <!-- Language Changer Button -->
        <button
          @click="changelanguage"
          class="flex p-1 border items-center gap-2 rounded-md hover:bg-gradient-to-l from-blue-400 to-indigo-400 text-white"
        >
          <IconsLanguage class="h-5 w-5" />
        </button>
        <!-- Info Modal -->
        <button
          @click="openInfoModal"
          class="flex p-1 border items-center gap-2 rounded-md hover:bg-gradient-to-l from-blue-400 to-indigo-400 text-white"
        >
          <IconsInfo class="h-5 w-5" />
        </button>
        <!-- Logout Button -->
        <button
          @click="logout"
          class="flex p-1 border items-center gap-2 rounded-md hover:bg-gradient-to-l from-blue-400 to-indigo-400 text-white"
        >
          <IconsLogout class="h-5 w-5" />
          <span class="hidden md:flex text-sm">Logout</span>
        </button>
      </div>
    </div>
  </div>
</template>
<script setup>
const router = useRouter();
const { $global } = useNuxtApp();

const showUserInfo = () => {
  console.log("Open User info Modal");
};

const logout = () => {
  const token = useCookie("auth_");
  token.value = null;
  router.push("/login");
};

const changelanguage = () => {
  $global.$vayu.modal.open("lang-switch");
};

const openInfoModal = () => {
  console.log("Open Change Language Modal");
};
</script>
