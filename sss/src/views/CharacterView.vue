<script setup>
import DetailedInformation from '../components/DetailedInformation'
import Character from '../components/Character'
import CharacterList from '../components/CharacterList'
</script>

<template>
  <main>
    <div class="profile">
      <CharacterList/>
      <Character/>
    </div>
    <div class="additional-information">
      <DetailedInformation/>
    </div>
  </main>
</template>

<script>
import {useCharacterStore} from "../stores/character";

export default {
  props: {
    character: String,
  },
  watch: {
    character: function (newVal, oldVal) {
      useCharacterStore().set(newVal)
    },
  },
  beforeCreate() {
    useCharacterStore().set(this.character)
  }
}
</script>

<style>
@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}


main {
  display: flex;
  justify-content: flex-end;
}

.profile {
  display: flex;
  position: fixed;
  top: 20px;
  left: 20px;
  width: 50vw;
  max-height: calc(100vh - 40px);
  overflow-x: hidden;
}

.additional-information {
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
  margin-right: 20px;
  width: calc(50vw - 20px);
}
</style>