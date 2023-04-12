<template>
  <div v-for="toggle in toggles">
    <h3>{{ toggle.type }}</h3>
    <label v-for="item in toggle.items" :title="item.description">{{ item.name }} <input type="checkbox" v-model="item.value"></label>
  </div>
</template>

<script>
export default {
  props: {
    character: Object,
  },
  computed: {
    toggles() {
      return this.character.toggles
    }
  }
}
</script>