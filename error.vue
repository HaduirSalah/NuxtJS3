<template>
  <div class="error d-flex align-center justify-center" style="height: 100vh">
    <!-- <v-card>
      <v-card-title> 404 - Page Not Found </v-card-title>
      <v-card-text> The page you are looking for does not exist. </v-card-text>
      <v-card-actions>
        <NuxtLink :to="{ name: 'index' }"> Go to Home </NuxtLink>
      </v-card-actions>
    </v-card> -->

    <v-card>
      {{ error }}
      <v-card-title> Error {{ error.statusCode }} </v-card-title>
      <v-card-title> {{ error.statusMessage }} </v-card-title>
      <v-card-text> {{ error.message }} </v-card-text>
      <v-card-actions>
        <NuxtLink :to="{ name: 'index' }"> Go to Home </NuxtLink>
      </v-card-actions>
      <!-- <v-btn @click="$router.push({name:'index'})">Go Home</v-btn> -->
    </v-card>
  </div>
</template>

<script setup>
defineProps(["error"]);
</script>
