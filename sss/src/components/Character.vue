<script setup>
import SofiaToggles from './sofia/StatusToggles'
import AlithToggles from './alith/StatusToggles'
import ParethToggles from './pareth/StatusToggles'
import MornnDescription from './mornn/Description'
</script>

<template>
  <div class="character">
    <p class="row"><span class="column"><b>Name :</b> {{ character.name }}</span><span class="column"><b>Age :</b> {{ character.age }}</span></p>


    <p class="row"><span class="column"><b>Class :</b> {{ character.job }}</span><span
        class="column"><b>Level :</b> {{character.level}}</span></p>

    <SofiaToggles v-if="name === 'sofia'"/>
    <AlithToggles v-else-if="name === 'alith'"/>
    <ParethToggles v-else-if="name === 'paleth'"/>
    <MornnDescription v-else-if="name === 'mornn'"/>
  </div>
</template>

<script>
export default {
  props: {
    character: Object,
  },
  computed: {
    name() {
      if(this.character) {
        return this.character.name
      }
      return null
    }
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
