<script setup>
import {RouterView} from 'vue-router'
import {useCharacterStore} from "./stores/character";

useCharacterStore().load()
</script>

<template>
  <div class="wrapper">
    <RouterView/>
  </div>
</template>

<style scoped>
.wrapper {
  width : 100vw;
}
</style>
