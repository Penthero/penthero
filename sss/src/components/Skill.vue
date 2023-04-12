<template>
  <p v-html="description"></p>
</template>

<script>
export default {
  props: {
    character: Object,
  },
  computed: {
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