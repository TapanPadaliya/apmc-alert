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
          <p>TODO : Registration Form Here</p>
          <VyButton
            label="Submit"
            class="button--sm button--primary button--solid button--rounded p-1 text-sm"
            @click="registerUser"
          />
        </div>
      </template>
    </ModalRegisterDetail>
  </div>
</template>

<script setup>
import axios from "axios";
import { decodeCredential } from "vue3-google-login";
const runtimeConfig = useRuntimeConfig();
const { $global } = useNuxtApp();
const router = useRouter();
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
  $global.$vayu.modal.close("register-detail");
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
