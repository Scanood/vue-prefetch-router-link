<template>
    <div @click="clicked = true">
        <RouterLink v-bind="attrs">
            <slot></slot>
        </RouterLink>
    </div>
</template>

<script setup>
import { useAttrs, watch, ref } from 'vue';
import { RouterLink, useRoute, useRouter, } from 'vue-router';
import { useTele } from './useTele'
import { useMatcher } from './useMatcher'
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

const prefetchName = FomatPrefetchPath()
const route = useRoute()
const router = useRouter()
const to = router.resolve(attrs.to)
const tele = useTele(to.fullPath)

const getRecord = useMatcher()
watch([() => route.fullPath, () => tele.getTele()], (newpath) => {
    if (newpath[0] === to.fullPath && clicked.value) {
        if (props.teleEnabled && tele.getTele() || !props.teleEnabled) {
            prefetchName.forEach((name) => {
                const Components = getRecord(name)?.components
                if (Components) {
                    Object.values(Components).forEach((Component) => {
                        if (typeof Component === 'function') {
                            setTimeout(() => { Component() }, 0)
                        }
                    })
                }
            })
        }
    } else {
        clicked.value = false
    }
}, { immediate: true })
</script>