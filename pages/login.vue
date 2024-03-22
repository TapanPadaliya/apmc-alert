<!-- pages/login.vue -->
<template>
  <div
    class="flex w-full h-full my-10 items-center justify-center flex-col space-y-2"
  >
    <h1 class="text-2xl font-bold mb-5 text-black">Login With Google</h1>
    <GoogleLogin :callback="callback" />

    <!-- Register Detail Modal -->
    <ModalRegisterDetail>
      <template #body>
        <div class="p-2">
          <VForm @submit="registerUser" class="space-y-5">
            <!-- first_name -->
            <div class="space-y-1 text-sm text-gray-600 flex flex-col">
              <span class="text-grey-400">First Name</span>
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
            <!-- last_name -->
            <div class="space-y-1 text-sm text-gray-600 flex flex-col">
              <span class="text-grey-400">Last Name</span>
              <div class="border rounded-md border-gray-400 overflow-hidden">
                <VInput
                  type="text"
                  name="last_name"
                  class="p-2 w-full"
                  rules="required"
                />
              </div>
              <ErrorMessage
                name="last_name"
                class="text-xxs text-red-500 md:text-xs"
              ></ErrorMessage>
            </div>
            <!-- mobile -->
            <div class="space-y-1 text-sm text-gray-600 flex flex-col">
              <span class="text-grey-400">Mobile No</span>
              <div class="border rounded-md border-gray-400 overflow-hidden">
                +91
                <VInput
                  type="number"
                  name="mobile"
                  class="p-2 w-full"
                  rules="required"
                />
              </div>
              <ErrorMessage
                name="mobile"
                class="text-xxs text-red-500 md:text-xs"
              ></ErrorMessage>
            </div>
            <!-- email -->
            <div class="space-y-1 text-sm text-gray-600 flex flex-col">
              <span class="text-grey-400">Email</span>
              <div class="border rounded-md border-gray-400 overflow-hidden">
                <VInput
                  type="email"
                  name="email"
                  class="p-2 w-full"
                  rules="required|email"
                />
              </div>
              <ErrorMessage
                name="email"
                class="text-xxs text-red-500 md:text-xs"
              ></ErrorMessage>
            </div>
            <!-- state -->
            <div class="space-y-1 text-sm text-gray-600 flex flex-col">
              <span class="text-grey-400">State</span>
              <div class="border rounded-md border-gray-400 overflow-hidden">
                <!-- <VInput
                  type="email"
                  name="email"
                  v-model="email"
                  class="p-2 w-full"
                  rules="required|email"
                /> -->
                dropdown
              </div>
              <ErrorMessage
                name="email"
                class="text-xxs text-red-500 md:text-xs"
              ></ErrorMessage>
            </div>
            <!-- district -->
            <div class="space-y-1 text-sm text-gray-600 flex flex-col">
              <span class="text-grey-400">Email</span>
              <div class="border rounded-md border-gray-400 overflow-hidden">
                <!-- <VInput
                  type="email"
                  name="email"
                  v-model="email"
                  class="p-2 w-full"
                  rules="required|email"
                /> -->
                dropdown
              </div>
              <ErrorMessage
                name="email"
                class="text-xxs text-red-500 md:text-xs"
              ></ErrorMessage>
            </div>
            <!-- sub_district -->
            <div class="space-y-1 text-sm text-gray-600 flex flex-col">
              <span class="text-grey-400">Email</span>
              <div class="border rounded-md border-gray-400 overflow-hidden">
                <!-- <VInput
                  type="email"
                  name="email"
                  v-model="email"
                  class="p-2 w-full"
                  rules="required|email"
                /> -->
                dropdown
              </div>
              <ErrorMessage
                name="email"
                class="text-xxs text-red-500 md:text-xs"
              ></ErrorMessage>
            </div>
            <!-- village -->
            <div class="space-y-1 text-sm text-gray-600 flex flex-col">
              <span class="text-grey-400">village</span>
              <div class="border rounded-md border-gray-400 overflow-hidden">
                <VInput
                  type="text"
                  name="village"
                  class="p-2 w-full"
                  rules="required"
                />
              </div>
              <ErrorMessage
                name="village"
                class="text-xxs text-red-500 md:text-xs"
              ></ErrorMessage>
            </div>
            <button
              type="submit"
              class="flex items-center justify-center w-full rounded-lg bg-red-500 hover:bg-red-600 py-2 text-white text-md gap-2"
              :class="isLoadingRegister ? 'cursor-wait' : ''"
              :disabled="isLoadingRegister ? true : false"
            >
              <IconMdiLoading v-if="isLoadingRegister" class="h-6 w-6" />
              <span>
                {{ isLoadingRegister ? "Processing" : "Register" }}
              </span>
            </button>
          </VForm>
        </div>
      </template>
    </ModalRegisterDetail>
  </div>
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";
import { decodeCredential } from "vue3-google-login";
const runtimeConfig = useRuntimeConfig();
const { $global } = useNuxtApp();
const router = useRouter();
const isLoadingRegisterRegister = ref(false);
definePageMeta({
  layout: "auth",
});

const callback = async (response) => {
  const userData = decodeCredential(response?.credential);
  if (userData?.email) {
    await axios
      .get(`${runtimeConfig.public.API_ENDPOINT}/auth/login/${userData?.email}`)
      .then((response) => {
        console.log("reponmse", response);
      })
      .catch((error) => {
        if (error?.response?.data?.error.includes("not found")) {
          $global.$vayu.modal.open("register-detail");
        } else {
          $global.$vayu.notify({
            port: "toast",
            title: error?.response?.data?.error || "Something Went Wrong!",
            duration: 2500,
            state: "danger",
          });
        }
      });
  }
};

// Register User
const registerUser = async () => {
  await axios
    .post(
      `${runtimeConfig.public.API_ENDPOINT}/auth/sign-up`,
      {
        first_name: "Jill",
        last_name: "Makadiya",
        mobile: 7016512456,
        country_code: 91,
        email: "jillmakadiya@gmail.com",
        role_id: "65f095d30db9cd87a52c5e3f",
        state: "Gujarat",
        district: "Rajot",
        sub_district: "Upleta",
        village: "Bhayavadar",
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
    .then((res) => {
      console.log("register response", res);
      // $global.$vayu.modal.close("register-detail");
      // localStorage.setItem("token", userData?.email);
      // router.push("/");
    })
    .catch((error) => {
      if (error?.response?.data?.error) {
        $global.$vayu.notify({
          port: "toast",
          title: error?.response?.data?.error || "Something Went Wrong!",
          duration: 2500,
          state: "danger",
        });
      }
    });
};
</script>
<style>
.notification__icon {
  display: none;
}
</style>
