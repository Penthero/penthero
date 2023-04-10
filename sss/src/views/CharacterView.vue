<script setup>
import DetailedInformation from '../components/DetailedInformation'
import Character from '../components/Character'
import CharacterList from '../components/CharacterList'
</script>

<template>
  <main>
    <div class="profile">
      <CharacterList/>
      <Character :character="store"/>
    </div>
    <div class="additional-information">
      <DetailedInformation :character="store"/>
    </div>
  </main>
</template>

<script>
import {useSofiaStore} from "../stores/sofia";
import {useAlithStore} from "../stores/alith";

export default {
  props: {
    character: String,
  },
  computed: {
    store() {
      console.log(this.character)
      switch (this.character) {
        case 'sofia':
          return useSofiaStore()
        case 'alith':
          return useAlithStore()
      }
    }
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
}

.additional-information {
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
  margin-right: 20px;
  width: calc(50vw - 20px);
}
</style>