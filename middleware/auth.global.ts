export default defineNuxtRouteMiddleware((to, from) => {
  const token = localStorage.getItem("token");

  if (from.name == "login") {
    if (token) {
      console.log("Token Found navigate to deshboard");

      // return navigateTo("/hello");
    }
  } else {
    if (token) {
      // Do api call and check for token
      console.log("Token :", token);
    } else {
      // return navigateTo("/login");
      console.log("from");
    }
  }
});
