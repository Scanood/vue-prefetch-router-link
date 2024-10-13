<template>
    <div @click="clicked = true">
        <RouterLink v-bind="attrs">
            <slot></slot>
        </RouterLink>
    </div>
</template>

<script setup>
import { useAttrs, watch, ref } from 'vue';
import { RouterLink, useRoute, useRouter, createRouterMatcher } from 'vue-router';
import { useTele } from './useTele'
const attrs = useAttrs()
const props = defineProps({
    prefetchName: String | Array,
    teleEnabled: Boolean
})
const clicked = ref(false)

function FomatPrefetchPath() {
    let prefetchName = []
    if (Array.isArray(props.prefetchName)) {
        prefetchName = props.prefetchName
    }
    else if (typeof props.prefetchName === 'string') {
        prefetchName.push(props.prefetchName)
    }
    return prefetchName
}


const router = useRouter()
const matcher = createRouterMatcher(router.options.routes, router.options)
function getRoute(name) {
    return matcher.getRecordMatcher(name).record
}

const prefetchName = FomatPrefetchPath()
const route = useRoute()
const to = router.resolve(attrs.to)
const tele = useTele(to.fullPath)

watch([() => route.fullPath, () => tele.getTele()], (newpath) => {
    if (newpath[0] === to.fullPath && clicked.value) {
        if (props.teleEnabled && tele.getTele() || !props.teleEnabled) {
            prefetchName.forEach((name) => {
                const Components = getRoute(name).components
                Object.values(Components).forEach((Component) => {
                    if (typeof Component === 'function') {
                        setTimeout(() => { Component() }, 0)
                    }
                })

            })
        }
    } else {
        clicked.value = false
    }
}, { immediate: true })
</script>