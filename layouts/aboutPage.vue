<template>
  <div class="about-layout">
    <v-layout>
      <v-app-bar>
        <ul
          class="d-flex"
          style="list-style: none; gap: 15px; margin: 0; padding: 0"
        >
          <li><NuxtLink :to="{ name: 'index' }">Home</NuxtLink></li>
          <li><NuxtLink :to="{ name: 'about' }">About</NuxtLink></li>
          <li><NuxtLink :to="{ name: 'profile' }">Profile</NuxtLink></li>
          <li>
            <NuxtLink :to="{ name: 'profile-settings' }"> Settings</NuxtLink>
          </li>
          <li><NuxtLink :to="{ name: 'blogs' }">Blogs</NuxtLink></li>

          <li>
            <NuxtLink :to="{ name: 'blogs-id', params: { id: 1 } }"
              >Blog
            </NuxtLink>
          </li>
        </ul>
      </v-app-bar>
      <v-main>
        <slot />
      </v-main>
      <v-footer :app="true" style="background-color: lightblue">
        <span>My Nuxt App © 2024</span>
        
      </v-footer>
    </v-layout>
  </div>
</template>
