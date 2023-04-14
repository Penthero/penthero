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
                character.value = useSofiaStore()
        }
        if (!character.value.loaded) character.value.load()
    }

    function setRace(race) {
        if (character.value && character.value.character.races) {
            for (let i = 0; i < character.value.character.races.length; ++i) {
                if (race === character.value.character.races[i].name.toLowerCase()) {
                    character.value.race = character.value.character.races[i]
                    return
                }
            }
        }
    }

    return {character: character, set, setRace}
})
