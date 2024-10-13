import { ref } from 'vue'
import { useRoute } from 'vue-router'
const TeleMap = new Map()
// name:router fullpath
function useTele(name) {
    if (!name) {
        const route = useRoute()
        name = route.fullPath
    }
    if (TeleMap.has(name)) {
        return TeleMap.get(name)
    } else {
        const Tele = {
            state: ref(false),
            setTele: function (value) {
                this.state.value = value
            },
            getTele: function () {
                return this.state.value
            }
        }
        TeleMap.set(name, Tele)
        return Tele
    }
}

export { useTele }