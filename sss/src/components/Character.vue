<script setup>
import Toggles from './Toggles'
</script>

<template>
  <div class="character">
    <p class="row"><span class="column"><b>Name :</b> {{ character.name }}</span><span class="column"><b>Age :</b> {{ character.age }}</span></p>


    <p class="row"><span class="column"><b>Class :</b> {{ character.job }}</span><span
        class="column"><b>Level :</b> {{character.level}}</span></p>

    <RouterView :character="character"/>
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
.character {
  flex-grow: 1;
}

.row {
  display: flex;
  justify-content: space-between;
}
</style>
