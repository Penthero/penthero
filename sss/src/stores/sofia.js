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

    return {sofia, name, age, job, level, toggles, load}
})
