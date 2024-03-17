export default defineNuxtRouteMiddleware(async (to, from) => {
  const token = localStorage.getItem("token");
  if (to.name !== "login" && !token) {
    return navigateTo("/login");
  }
  if (to.name === "login" && token) {
    return navigateTo("/");
  }
});
