import {ref, computed} from 'vue'
import {defineStore} from 'pinia'
import axios from "axios";

export const useSofiaStore = defineStore('sofia', () => {
    const sofia = ref(null)
    const toggles = ref(null)
    const name = computed(() => sofia.value ? sofia.value.name : null)
    const age = computed(() => sofia.value ? sofia.value.age : null)
    const job = computed(() => sofia.value ? sofia.value.class : null)
    const level = computed(() => sofia.value ? sofia.value.level : null)
    const skills = computed(() => sofia.value ? sofia.value.skills : null)

    function load() {
        axios.get('/sss/api/characters/sofia.json')
            .then(function (response) {
                sofia.value = response.data
                toggles.value = response.data.toggles
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

    return {sofia, name, age, job, level, toggles, skills, skill, load}
})
