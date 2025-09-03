<template>
  <div class="home">
    <h1>الصفحة الرئيسية</h1>
    <!-- <h1>Welcome to the Home Page</h1> -->
    <!-- <img src="@/assets/Cover.jpg" width="300" alt="Cover Image" />
    <img src="../assets/Cover.jpg" width="300" alt="Cover Image" /> -->
    <!-- <img src="~/assets/Cover.jpg" width="300" alt="Cover Image" /> -->
    <img src="/images/Cover.jpg" alt="Cover Image" />
    <p>This is the home page of our Nuxt.js application.</p>
  </div>
</template>
<script setup>
// import '@/assets/style.css';
// composable useCookie
// how to get cookie
console.log(useCookie("user").value);
// how to set cookie
useCookie("user").value = "Hadeer";
// how to change value of cookie
useCookie("user").value = "Ahmed";

// how to set expire date of cookie
useCookie("user", {
  // expires: new Date(Date.now() + 1000),
  // expires: new Date(Date.now() + 1000 * 60 * 60), // after one hour
  // expires: new Date(Date.now() + 1000 * 60 * 60 * 24), // after one day
  // maxAge: 3, // after 3 seconds
  maxAge: 60 * 60 * 24, // after one day
}).value = "Ahmed";
</script>
