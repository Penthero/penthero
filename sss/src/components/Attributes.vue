<template>
  <div class="details">
    Lets put some stats per level and detailed skill information here :)
    {{ character }}
  </div>
</template>

<script>
import {mapState} from "pinia";
import {useCharacterStore} from "../stores/character";

export default {
  computed: {
    ...mapState(useCharacterStore, ['character']),
  }
}
</script>

<style scoped>
.details {
}
</style>