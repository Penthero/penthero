<script setup>
import {RouterView} from 'vue-router'
</script>

<template>
  <div class="details">
  <RouterView name="detailedInformation" :character="character"/>
  </div>
</template>

<script>
export default {
  props: {
    character: Object,
  },
}
</script>


<style scoped>
.details {
}
</style>