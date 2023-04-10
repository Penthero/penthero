import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from "axios";

export const useSofiaStore = defineStore('sofia', () => {
  const sofia = ref(null)
  const name = computed(() => sofia.value ? sofia.value.name : null)
  const age = computed(() => sofia.value ? sofia.value.age : null)
  const job = computed(() => sofia.value ? sofia.value.class : null)
  const level = computed(() => sofia.value ? sofia.value.level : null)
  function load() {
    axios.get('/sss/api/characters/sofia/profile')
        .then(function(response) {
          sofia.value = response.data
        })
        .catch(function(error) {
          console.log(error)
        })
  }

  return { sofia, name, age, job, level, load }
})
