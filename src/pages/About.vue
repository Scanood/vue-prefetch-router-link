<script setup>
// import { useTele } from '../components/useTele'
// import { useTele } from '../../dist/prefetch-router-link.js'
import {useTele} from 'vue-prefetch-router-link'
const tele = useTele()
function mockEvent() {
    console.log('hover');
    tele.open();
}

</script>

<template>
    <div class="content">
        this is about page.
        <div class="hover" @mouseover="mockEvent">
            hover me!
        </div>
    </div>
</template>
<style scoped>
.content {
    width: 100%;
    height: 200px;
    margin: auto;
    text-align: center;
    align-content: center;
    background-color: aquamarine;
}

.hover {
    width: 100px;
    height: 100px;
    background-color: pink;
}
</style>