import { useRouter, createRouterMatcher } from 'vue-router'
let matcher = undefined
function useMatcher() {

    function getRecord(name) {
        // todo addroutes
        return matcher.getRecordMatcher(name)?.record
    }
    if (matcher) return getRecord

    const router = useRouter()
    matcher = createRouterMatcher(router.options.routes, router.options)

    return getRecord
}



export {
    useMatcher
}