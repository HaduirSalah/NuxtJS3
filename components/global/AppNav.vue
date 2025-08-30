<template>
  <div class="nav">
    <nav style="background-color: lightblue; padding: 10px">
      <ul
        style="
          list-style: none;
          display: flex;
          gap: 15px;
          margin: 0;
          padding: 0;
        "
      >
        <!-- <li><NuxtLink to="/">Home</NuxtLink></li>
        <li><NuxtLink to="/about">About</NuxtLink></li>
        <li><NuxtLink to="/profile">Profile</NuxtLink></li>
        <li><NuxtLink to="/profile/settings"> Settings</NuxtLink></li>
        <li><NuxtLink to="/blogs">Blogs</NuxtLink></li> -->
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
    </nav>
  </div>
</template>

<script>
export default {
  name: "AppNav",
  mounted() {
    console.log(this.$router.options.routes);
  },
};
</script>
