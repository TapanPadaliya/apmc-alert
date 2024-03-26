<template>
  <div
    class="header flex w-full items-center justify-center bg-gradient-to-r from-indigo-400 to-blue-400"
  >
    <div class="flex items-center justify-between container md:mx-6 p-2">
      <div v-if="isLoading">
        <IconsMdiLoading class="animate-spin h-8 w-8 text-white" />
      </div>
      <button
        v-else-if="userDetail"
        class="flex gap-2 items-center justify-center"
        @click="showUserInfo"
      >
        <img
          :src="userDetail?.avatar"
          alt="user_image"
          class="h-8 w-8 rounded-full border border-white"
        />
        <span class="hidden md:flex text-white">
          {{ userDetail?.first_name }} {{ userDetail?.last_name }}
        </span>
      </button>
      <div class="text-2xl font-semibold flex text-white items-center gap-2">
        <img
          src="/logo.png"
          class="h-10 w-10 rounded-md border border-white md:border-white p-1"
        /><span
          class="hidden md:flex text-white drop-shadow-xl font-chakra-petch"
          >APMC Alert</span
        >
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
          <IconsMdiLoading v-if="tokenLoading" class="animate-spin h-5 w-5" />
          <IconsLogout class="h-5 w-5" v-else />
          <span class="hidden md:flex text-sm">{{
            tokenLoading ? "Logging Out" : "Logout"
          }}</span>
        </button>
      </div>
    </div>
  </div>
</template>
<script setup>
const router = useRouter();
import axios from "axios";
import { ref, onMounted } from "vue";
const runtimeConfig = useRuntimeConfig();
const { $global } = useNuxtApp();
import { useUserStore } from "@/stores/user";

const store = useUserStore();
const tokenLoading = ref(false);
const userDetail = ref(null);

const isLoading = ref(true);
onMounted(() => {
  getUserDetail();
});

const getUserDetail = async () => {
  const userEmail = useCookie("A_userEmail_");
  if (userEmail.value) {
    await axios
      .get(`${runtimeConfig.public.API_ENDPOINT}/user/${userEmail.value}`)
      .then((response) => {
        if (response?.data?.success) {
          store.updateUser(response?.data?.data);
          userDetail.value = response?.data?.data;
          $global.$vayu.notify({
            port: "toast",
            title: "User Logged In!",
            duration: 2500,
            state: "success",
          });
          isLoading.value = false;
          // const authCookie = useCookie("A_auth_");
          // authCookie.value = response?.data?.token;
          // $global.$vayu.modal.close("register-detail");
          // isLoadingRegister.value = false;
          // router.push("/");
        }
      })
      .catch((error) => {
        if (error?.response?.data?.error) {
          $global.$vayu.notify({
            port: "toast",
            title: error?.response?.data?.error || "Something Went Wrong!",
            duration: 2500,
            state: "danger",
          });
        } else {
          console.error("UnCaught Error While Fetching User Detail : ", error);
        }
      });
  } else {
    setTimeout(() => {
      $global.$vayu.notify({
        port: "toast",
        title: "No Email Found!",
        duration: 2500,
        state: "danger",
      });
    }, 1000);
    setTimeout(() => {
      const authCookie = useCookie("A_auth_");
      authCookie.value = null;
      router.push("/login");
    }, 1000);
  }
};

const showUserInfo = () => {
  console.log("Open User info Modal");
};

const logout = () => {
  tokenLoading.value = true;
  const token = useCookie("A_auth_");
  setTimeout(() => {
    token.value = null;
    router.push("/login");
    tokenLoading.value = false;
  }, 2000);
};

const changelanguage = () => {
  $global.$vayu.modal.open("langswitch");
};

const openInfoModal = () => {
  console.log("Open Change Language Modal");
};
</script>
