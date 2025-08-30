<template>
  <div id="app">
    <nuxt-layout>
      <NuxtPage />
    </nuxt-layout>
  </div>
</template>

<style>
@font-face {
  font-family: Cairo;
  src: url(/fonts/Cairo-Black.ttf);
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Cairo, sans-serif;
}

.page-enter-active,
.page-leave-active {
  transition: opacity 0.5s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
}
</style>
