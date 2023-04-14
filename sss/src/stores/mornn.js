import {ref, computed} from 'vue'
import {defineStore} from 'pinia'
import axios from "axios";

export const useMornnStore = defineStore('mornn', () => {
    const character = ref(null)
    const race = ref(null)
    const loaded = ref(false)
    const name = computed(() => character.value ? character.value.name : null)
    const age = computed(() => character.value ? character.value.age : null)
    const job = computed(() => character.value ? character.value.class : null)
    const level = computed(() => character.value ? character.value.level : null)

    function load() {
        axios.get('/sss/api/characters/mornn.json')
            .then(function (response) {
                character.value = response.data
                loaded.value = true
            })
            .catch(function (error) {
                console.log(error)
            })
    }

    return {character, name, age, job, level, loaded, load}
})
