import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from "axios";

export const useAlithStore = defineStore('alith', () => {
  const alith = ref(null)
  const name = computed(() => alith.value ? alith.value.name : null)
  const age = computed(() => alith.value ? alith.value.age : null)
  const job = computed(() => alith.value ? alith.value.class : null)
  const level = computed(() => alith.value ? alith.value.level : null)
  function load() {
    axios.get('/sss/api/characters/alith/')
        .then(function(response) {
          alith.value = response.data
        })
        .catch(function(error) {
          console.log(error)
        })
  }

  return { alith: alith, name, age, job, level, load }
})
