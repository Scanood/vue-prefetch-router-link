<template>
    <RouterLink v-bind="attrs">
        <slot></slot>
    </RouterLink>
</template>

<script setup>
import { useAttrs, watch } from 'vue';
import { RouterLink, useRoute, useRouter, createRouterMatcher } from 'vue-router';
const attrs = useAttrs()
const props = defineProps({
    prefetchName: String | Array
})

let prefetchName = []
if (Array.isArray(props.prefetchName)) {
    prefetchName = props.prefetchName
}
else if (typeof props.prefetchName === 'string') {
    prefetchName.push(props.prefetchName)
}
else {
    prefetchName.push('/')
}

const route = useRoute()
const router = useRouter()
const matcher = createRouterMatcher(router.options.routes, router.options)
function getRoute(name) {
    return matcher.getRecordMatcher(name).record
}


watch(() => route.fullPath, (newpath) => {
    if (newpath === attrs.to) {
        prefetchName.forEach((name) => {
            const record = getRoute(name).components.default
            typeof record === 'function' && record()
        })
    }
}, { immediate: true })
</script>