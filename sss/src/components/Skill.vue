<template>
  <p v-html="description"></p>
</template>

<script>
import {useCharacterStore} from "../stores/character";

export default {
  computed: {
    skillName() {
      return this.$route.params.skill
    },
    skillData() {
      return this.skill(this.skillName)
    },
    description() {
      return this.skillData ? this.skillData.description : ''
    },
  },
  methods: {
    skill(skill) {
      return useCharacterStore().skill(this.skillName)
    }
  }
}
</script>