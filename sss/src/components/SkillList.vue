<template>
  <div v-for="type in skills">
    <h3>{{ type.type }}</h3>
    <RouterLink :to="{name: 'character-skills', params: {character: characterRoute, skill: item.name}}" v-for="item in type.items">{{ item.name }}</RouterLink>
  </div>
</template>

<script>
export default {
  props: {
    character: Object,
  },
  computed: {
    skills() {
      return this.character.skills;
    },
    characterRoute() {
      return this.$route.params.character
    }
  }
}
</script>