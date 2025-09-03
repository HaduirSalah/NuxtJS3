<template>
  <div class="profile-page">
    <h1>User Profile</h1>
    <p>This is the profile page of our Nuxt.js application.</p>
  </div>
</template>

<script setup>
// local middleware
definePageMeta({
  middleware: [
    // "auth",
    // (to, from) => {
    //   // Anonymous function (arrow function)
    //   console.log("from", from);
    //   console.log("to", to);
    //   //   if(to.name== 'profile'){
    //   //     return navigateTo('/');
    //   //   }
    //   if (!useCookie("user").value) {
    //     return navigateTo("/");
    //   }
    // },
  ],
});
</script>
