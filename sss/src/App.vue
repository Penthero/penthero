<script setup>
import {RouterView} from 'vue-router'
import {useSofiaStore} from "./stores/sofia";
import {useAlithStore} from "./stores/alith";

useSofiaStore().load()
useAlithStore().load()
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
