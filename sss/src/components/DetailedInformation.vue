<script setup>
import {RouterView} from 'vue-router'
</script>

<template>
  <div class="details">
  <RouterView name="detailedInformation" :character="character"/>
  </div>
</template>

<script>
import { mapState } from 'pinia'
import {useCharacterStore} from "../stores/character";

export default {
  computed: {
    ...mapState(useCharacterStore, ['character'])
  }
}
</script>


<style scoped>
.details {
}
</style>