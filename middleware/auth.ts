export default defineNuxtRouteMiddleware((to, from) => {
  if (!useCookie("user").value) {
    return navigateTo("/");
  }
});
