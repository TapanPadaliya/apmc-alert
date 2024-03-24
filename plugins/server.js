export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook("app:created", async (renderContext) => {
    if (process.server) {
    }
    if (
      nuxtApp.$i18n.locale.value == "en" ||
      nuxtApp.$i18n.locale.value == "gj" ||
      nuxtApp.$i18n.locale.value == "hi"
    ) {
      // Do Nothing
    } else {
      nuxtApp.$i18n.locale.value = "en";
      useCookie("A_locale_").value = "en";
    }
  });
});
