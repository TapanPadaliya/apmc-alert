export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook("app:created", async (renderContext) => {
    if (process.server) {
    }
    if (
      nuxtApp.$i18n.locale.value == "en" ||
      nuxtApp.$i18n.locale.value == "gj" ||
      nuxtApp.$i18n.locale.value == "hi"
    ) {
      console.log("Google local");
    } else {
      nuxtApp.$i18n.locale.value = "en";
      useCookie("locale_").value = "en";
    }
  });
});
