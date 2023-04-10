<script setup>
import {RouterView} from 'vue-router'
</script>

<template>
  <div class="character">
    <p class="row"><span class="column"><b>Name :</b> {{ character.name }}</span><span class="column"><b>Age :</b> {{ character.age }}</span></p>


    <p class="row"><span class="column"><b>Class :</b> {{ character.job }}</span><span
        class="column"><b>Level :</b> {{character.level}}</span></p>

    <RouterView/>
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
.character {
  flex-grow: 1;
}

.row {
  display: flex;
  justify-content: space-between;
}
</style>
