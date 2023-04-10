<script setup>
import {RouterView} from 'vue-router'
</script>

<template>
  <div class="character">
    <p class="row"><span class="column"><b>Name :</b> Sofia</span><span class="column"><b>Age :</b> 20</span></p>


    <p class="row"><span class="column"><b>Class :</b> [Saintomancer] ♢</span><span
        class="column"><b>Level :</b>180</span></p>

    <RouterView/>
  </div>
</template>

<style scoped>
.character {
  flex-grow: 1;
}

.row {
  display: flex;
  justify-content: space-between;
}
</style>
