<template>
    <div class="about-page">
        <!-- way 1: using Head tag for local meta tags -->
        <!-- <Head>
            <title>About Us - My Nuxt App</title>
            <meta name="description" content="Learn more about us on this page." />
            <meta name="keywords" content="development, Vuejs, Nuxtjs"></meta>
        </Head>
        <h1>About Us</h1>
        <p>This is the about page of our Nuxt.js application.</p> -->
    </div>
</template>

<script setup>
// composition API
// way 2.1: using useHead for local meta tags
// useHead({
//     title: 'About Us - My Nuxt App',
//     meta: [
//         { name: 'description', content: 'Learn more about us on this page.' },
//         { name: 'keywords', content: 'development, Vuejs, Nuxtjs' }
//     ]
// });
// way 2.2: using useSeoMeta for local meta tags
// useSeoMeta({
//     title: 'About Us - My Nuxt App',
//     description: 'Learn more about us on this page.',
//     keywords: 'development, Vuejs, Nuxtjs'
// });
</script>