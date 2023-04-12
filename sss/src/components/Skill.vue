<template>
  <p v-html="description"></p>
</template>

<script>
import {mapState} from "pinia";
import {useCharacterStore} from "../stores/character";

export default {
  computed: {
    ...mapState(useCharacterStore, ['character']),
    skill() {
      return this.$route.params.skill
    },
    skillData() {
      return this.character.skill(this.skill)
    },
    description() {
      return this.skillData ? this.skillData.description : ''
    },
  }
}
</script>