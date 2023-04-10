<script setup>
import {RouterView} from 'vue-router'
import {useSofiaStore} from "./stores/sofia";
import {useAlithStore} from "./stores/alith";
import {useParethStore} from "./stores/pareth";

useSofiaStore().load()
useAlithStore().load()
useParethStore().load()
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
