import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from "axios";

export const useParethStore = defineStore('pareth', () => {
  const pareth = ref(null)
  const name = computed(() => pareth.value ? pareth.value.name : null)
  const age = computed(() => pareth.value ? pareth.value.age : null)
  const job = computed(() => pareth.value ? pareth.value.class : null)
  const level = computed(() => pareth.value ? pareth.value.level : null)
  function load() {
    axios.get('/sss/api/characters/pareth/')
        .then(function(response) {
          pareth.value = response.data
        })
        .catch(function(error) {
          console.log(error)
        })
  }

  return { pareth, name, age, job, level, load }
})
