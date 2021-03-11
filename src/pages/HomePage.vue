<template>
  <ol>
    <Pokemon v-for="pokemonData in state.pokemon" :key="pokemonData" :pokemon="pokemonData" />
  </ol>
</template>

<script>
import { computed, onMounted, reactive } from 'vue'
import { AppState } from '../AppState'
import { pokemonService } from '../services/PokemonService'
import Pokemon from '../components/pokemon'
export default {
  name: 'Home',
  setup() {
    const state = reactive({
      pokemon: computed(() => AppState.pokemon)

    })
    onMounted(() => {
      pokemonService.getPokeApi()
    })
    return {
      state
    }
  },
  components: {
    Pokemon
  }
}
</script>

<style scoped lang="scss">
.home{
  text-align: center;
  user-select: none;
  > img{
    height: 200px;
    width: 200px;
  }
}
</style>
