import vue3GoogleLogin from "vue3-google-login";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(vue3GoogleLogin, {
    clientId:
      "454311656074-sskqjlinjpshrj6t35hc5i6mvsf76khi.apps.googleusercontent.com",
    scope: "email",
  });
});
