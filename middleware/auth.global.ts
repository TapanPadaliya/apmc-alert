export default defineNuxtRouteMiddleware(async (to, from) => {
  const token = useCookie("A_auth_");
  if (to.name !== "login" && !token.value) {
    return navigateTo("/login");
  }
  if (to.name === "login" && token.value) {
    return navigateTo("/");
  }
});
