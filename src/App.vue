<script setup>
import { RouterView, RouterLink } from 'vue-router';
import PrefetchRouterLink from './components/PrefetchRouterLink.vue'
const name = 'dashboard'
</script>

<template>
  <nav class="nav">
    <RouterLink to="/">Go to Home</RouterLink>
    <RouterLink to="/about">Go to About</RouterLink>
    <RouterLink to="/dashboard">Go to Dashboard</RouterLink>
    <PrefetchRouterLink to="/about" :prefetchName="name">Pre Go to About</PrefetchRouterLink>
  </nav>

  <RouterView />
</template>

<style scoped>
.nav {
  position: relative;
  top: 10px;
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 50px;
  border-bottom: 1px rgba(156, 163, 175, 0.1) solid;
}

.nav a {
  text-decoration: none;
  line-height: 50px;
}
</style>
