<template>
  <div class="character-list">
    <router-link :to="{name: 'sofia-profile'}">
      <div class="character-portrait sofia"></div>
    </router-link>
    <router-link :to="{name: 'alith-profile'}">
      <div class="character-portrait alith"></div>
    </router-link>
  </div>
</template>

<style lang="scss" scoped>
.character-list {
  width: 120px;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-right: 20px;
  margin-top: -5px;
}

.character-portrait {
  width: 120px;
  height: 180px;
  margin: 10px;
  text-align: center;
  background-size: cover;
  transition: all 300ms;

  &.sofia {
    background-image: url("../assets/images/sofia-portrait.png");
  }

  &.alith {
    background-image: url("../assets/images/alith-portrait.png");
  }
}
</style>