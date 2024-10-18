<script setup>
import { useTele } from '../../../src/components/useTele'
const tele = useTele()
function mockEvent() {
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
}

.hover {
    width: 100px;
    height: 100px;
    background-color: pink;
    border-radius: 10px;
    line-height: 100px;
    margin: auto;
    margin-top: 20px;
    cursor: pointer;
}
</style>