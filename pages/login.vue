<!-- pages/login.vue -->
<template>
  <div
    class="flex w-full h-full my-10 items-center justify-center flex-col space-y-2"
  >
    <h1 class="text-2xl font-bold mb-5 text-black">{{ $t('login.with_google') }}</h1>
    <GoogleLogin :callback="callback" />

    <!-- Register Detail Modal -->
    <ModalRegisterDetail>
      <template #body>
        <div class="p-2 max-w-sm sm:max-w-full sm:p-4 md:p-8 w-full">
          <VForm
            @submit="registerUser"
            class="space-y-5 md:space-y-1 sm:grid sm:grid-cols-2 gap-4"
          >
            <div class="flex h-full items-center justify-center mb-10 flex-col">
              <span class="text-grey-400">Avatar</span>
              <img
                :src="userDetail?.picture"
                class="h-20 w-20 border-2 border-grey-400 rounded-full"
              />
            </div>
            <!-- first_name -->
            <div class="space-y-5 text-sm text-gray-600 flex flex-col">
              <div>
                <span class="text-grey-400">First Name</span>
                <div class="border rounded-md border-gray-400 overflow-hidden">
                  <VInput
                    type="text"
                    v-model="first_name"
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
              <div>
                <span class="text-grey-400">Last Name</span>
                <div class="border rounded-md border-gray-400 overflow-hidden">
                  <VInput
                    type="text"
                    v-model="last_name"
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
            </div>
            <!-- last_name -->
            <!-- <div class="space-y-1 text-sm text-gray-600 flex flex-col">
              
            </div> -->
            <!-- mobile -->
            <div class="space-y-1 text-sm text-gray-600 flex flex-col">
              <span class="text-grey-400">Mobile No</span>
              <div
                class="border rounded-md border-gray-400 overflow-hidden flex items-center justify-center"
              >
                <span class="mr-2 text-lg">+91</span>
                <VInput
                  type="text"
                  name="mobile"
                  class="p-2 w-full"
                  rules="required|phone_number"
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
                  v-model="email"
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
                <VInput
                  type="text"
                  name="state"
                  class="p-2 w-full"
                  rules="required"
                />
              </div>
              <ErrorMessage
                name="state"
                class="text-xxs text-red-500 md:text-xs"
              ></ErrorMessage>
            </div>
            <!-- district -->
            <div class="space-y-1 text-sm text-gray-600 flex flex-col">
              <span class="text-grey-400">District</span>
              <div class="border rounded-md border-gray-400 overflow-hidden">
                <VInput
                  type="text"
                  name="district"
                  class="p-2 w-full"
                  rules="required"
                />
              </div>
              <ErrorMessage
                name="district"
                class="text-xxs text-red-500 md:text-xs"
              ></ErrorMessage>
            </div>
            <!-- sub_district -->
            <div class="space-y-1 text-sm text-gray-600 flex flex-col">
              <span class="text-grey-400">Sub District</span>
              <div class="border rounded-md border-gray-400 overflow-hidden">
                <VInput
                  type="text"
                  name="subdistrict"
                  class="p-2 w-full"
                  rules="required"
                />
              </div>
              <ErrorMessage
                name="subdistrict"
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
              <IconsMdiLoading v-if="isLoadingRegister" class="h-6 w-6" />
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
import { ref, onMounted } from "vue";
const { locale } = useI18n();
import axios from "axios";
import { decodeCredential } from "vue3-google-login";
const runtimeConfig = useRuntimeConfig();
const { $global } = useNuxtApp();
const router = useRouter();
definePageMeta({
  layout: "auth",
});

// States
const isLoadingRegister = ref(false);
const userDetail = ref(null);
const first_name = ref(null);
const last_name = ref(null);
const email = ref(null);

const callback = async (response) => {
  const userData = decodeCredential(response?.credential);
  userDetail.value = userData;
  const splitName = userData?.name.split(" ");
  if (splitName[0]) {
    first_name.value = splitName[0];
  }
  if (splitName[1]) {
    last_name.value = splitName[1];
  }
  email.value = userData?.email;
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
const registerUser = async (detail) => {
  let role_id = "";
  await axios
    .get(`${runtimeConfig.public.API_ENDPOINT}/auth/role`)
    .then((response) => {
      if (response?.data?.data[0]?._id) {
        role_id = response?.data?.data[0]?._id;
      } else {
        $global.$vayu.notify({
          port: "toast",
          title: "Something Went Wrong With Role!",
          duration: 2500,
          state: "danger",
        });
      }
    });
  await axios
    .post(
      `${runtimeConfig.public.API_ENDPOINT}/auth/sign-up`,
      {
        first_name: detail?.first_name,
        last_name: detail?.last_name,
        mobile: detail?.mobile,
        country_code: 91,
        email: detail?.email,
        role_id: role_id,
        state: detail?.state,
        district: detail?.district,
        sub_district: detail?.subdistrict,
        village: detail?.village,
        app_version: getVersion(),
        avatar: userDetail.value?.picture,
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
      setCookie("auth_", "Fdsfdsfsdfdfs");
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

const getApmcs = async () => {};
</script>
<style>
.notification__icon {
  display: none;
}
</style>
