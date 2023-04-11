import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from "axios";

export const useMornnStore = defineStore('mornn', () => {
  const mornn = ref(null)
  const name = computed(() => mornn.value ? mornn.value.name : null)
  const age = computed(() => mornn.value ? mornn.value.age : null)
  const job = computed(() => mornn.value ? mornn.value.class : null)
  const level = computed(() => mornn.value ? mornn.value.level : null)
  function load() {
    axios.get('/sss/api/characters/mornn.json')
        .then(function(response) {
          mornn.value = response.data
        })
        .catch(function(error) {
          console.log(error)
        })
  }

  return { mornn: mornn, name, age, job, level, load }
})
