import vue3GoogleLogin from "vue3-google-login";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(vue3GoogleLogin, {
    clientId:
      "754591767100-i8jht86c2emdb9rdnv36p71jd7rk0646.apps.googleusercontent.com",
    scope: "email profile openid",
  });
});
