import { defineComponent } from 'vue'
import { watch, ref, h } from 'vue'
import type { DefineComponent } from 'vue'
import { RouterLink, useRoute, useRouter, } from 'vue-router'
import { useTele } from './useTele'
import { useMatcher } from './useMatcher'
import { PrefetchRouterLinkProps } from './types'
export const PrefetchRouterLink = /*#__PURE__*/ defineComponent({
    name: 'PrefetchRouterLink',
    props: {
        //@ts-ignore
        ...RouterLink.props,
        prefetchName: {
            type: [Array<String>, String],
            required: false,
        },
        teleEnabled: {
            type: Boolean,
            required: false,
        }
    },
    setup(props, { slots }) {
        const clicked = ref<Boolean>(false)
        function FomatPrefetchPath() {
            let prefetchName: Array<string> = []
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
        // @ts-ignore
        const to = router.resolve(props.to)
        const tele = useTele(to.fullPath)

        const getRecord = useMatcher()
        watch([() => route.fullPath, () => tele.getTele()], (newpath) => {
            if (newpath[0] === to.fullPath && clicked.value) {
                if (props.teleEnabled && tele.getTele() || !props.teleEnabled) {
                    prefetchName.forEach((name) => {
                        const Components = getRecord(name)?.components
                        if (Components) {
                            Object.values(Components).forEach((Component: any) => {
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

        return () => {
            const slot = slots.default?.()
            return h('div',
                { onClick: () => clicked.value = true },
                [
                    // @ts-ignore
                    h(RouterLink, { ...props }, () => slot[0])
                ])
        }
    }
}) as DefineComponent<PrefetchRouterLinkProps>