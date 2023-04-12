import {ref, computed} from 'vue'
import {defineStore} from 'pinia'
import {useSofiaStore} from "./sofia";
import {useAlithStore} from "./alith";
import {useParethStore} from "./pareth";
import {useMornnStore} from "./mornn";

export const useCharacterStore = defineStore('character', () => {
    const character = ref(null)

    function set(characterName) {
        switch (characterName) {
            case 'sofia':
                character.value = useSofiaStore()
                break
            case 'alith':
                character.value = useAlithStore()
                break
            case 'pareth':
                character.value = useParethStore()
                break
            case 'mornn':
                character.value = useMornnStore()
                break
            default:
                return null
        }
    }

    function load() {
        useSofiaStore().load()
        useAlithStore().load()
        useParethStore().load()
        useMornnStore().load()
    }

    return {character: character, set, load}
})
