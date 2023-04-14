import {ref, computed} from 'vue'
import {defineStore} from 'pinia'
import axios from "axios";

export const useSofiaStore = defineStore('sofia', () => {
    const character = ref(null)
    const toggles = ref(null)
    const race = ref(null)
    const loaded = ref(false)
    const name = computed(() => character.value ? character.value.name : null)
    const age = computed(() => character.value ? character.value.age : null)
    const job = computed(() => character.value ? character.value.class : null)
    const level = computed(() => character.value ? character.value.level : null)
    const skills = computed(() => character.value ? character.value.skills : null)

    function load() {
        axios.get('/sss/api/characters/sofia.json')
            .then(function (response) {
                character.value = response.data
                toggles.value = character.value.toggles ? character.value.toggles : null
                race.value = character.value.races && character.value.races.length > 0 ? character.value.races[0] : null
                loaded.value = true
            })
            .catch(function (error) {
                console.log(error)
            })
    }

    function skill(skillName) {
        if (!this.skills) {
            return null
        }

        for (let i = 0; i < this.skills.length; ++i) {
            for (let j = 0; j < this.skills[i].items.length; ++j) {
                if (this.skills[i].items[j].name === skillName) {
                    return this.skills[i].items[j]
                }
            }
        }
        return null
    }

    return {character, name, age, job, level, toggles, skills, race, loaded, skill, load}
})
