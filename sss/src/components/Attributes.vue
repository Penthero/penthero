<template>
  <div class="details">
  Lets put some stats per level and detailed skill information here :)
    {{character}}
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