<script setup>
import { RouterView } from 'vue-router';
</script>

<template>
    <div class="content">
        this is father page.
    </div>
    <RouterView />
</template>
<style scoped>
.content {
    width: 100%;
    height: 200px;
    margin: auto;
    text-align: center;
    align-content: center;
}
</style>