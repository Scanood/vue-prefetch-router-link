<script setup>
import { RouterView, RouterLink } from 'vue-router';
import PrefetchRouterLink from './components/PrefetchRouterLink.vue'
const name = 'dashboard'
const panel = 'panel'
</script>

<template>
  <nav class="nav">
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink>
    <PrefetchRouterLink :to="{ name: 'about' }" :prefetchName="name" :teleEnabled="true">About[dashboard]</PrefetchRouterLink>
    <RouterLink to="/dashboard">Dashboard</RouterLink>
    <PrefetchRouterLink to="/admin" :prefetchName="panel" :teleEnabled="false">Admin[panel]</PrefetchRouterLink>
    <PrefetchRouterLink to="/father" :prefetchName="['son1','son2']">Father</PrefetchRouterLink>
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

.nav * {
  text-decoration: none;
  line-height: 50px;
}
</style>
