<template>
  <div v-for="type in skills">
    <h3>{{ type.type }}</h3>
    <RouterLink :to="{name: 'character-skills', params: {character: characterRoute, skill: item.name}}"
                v-for="item in type.items">{{ item.name }}
    </RouterLink>
  </div>
</template>

<script>
import {mapState} from 'pinia'
import {useCharacterStore} from "../stores/character";

export default {
  computed: {
    ...mapState(useCharacterStore, ['character']),
    skills() {
      return this.character.skills;
    },
    characterRoute() {
      return this.$route.params.character
    }
  }
}
</script>