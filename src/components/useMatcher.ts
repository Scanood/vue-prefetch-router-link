import { useRouter, createRouterMatcher } from 'vue-router'
import type { RouterMatcher } from 'vue-router'
let matcher:RouterMatcher | undefined = undefined
function useMatcher() {

    function getRecord(name: string) {
        // todo addroutes
        return matcher?.getRecordMatcher(name)?.record
    }
    if (matcher) return getRecord

    const router = useRouter()
    matcher = createRouterMatcher(router.options.routes, router.options)

    return getRecord
}



export {
    useMatcher
}