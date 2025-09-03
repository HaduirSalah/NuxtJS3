export default defineNuxtRouteMiddleware((to, from) => {
  if (!useCookie("user").value && to.name == "profile") {
    return navigateTo("/");
  }
});
