import { ref } from 'vue'

const TeleMap = new Map()

function useTele(name) {
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