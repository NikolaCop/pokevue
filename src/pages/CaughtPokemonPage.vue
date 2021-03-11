<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12">
        <h1 class="text-center" id="words">
          Your Caught Pokemon
        </h1>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <router-link :to="{name:'PokemonDetails', params: {name: state.pokemon.name}}">
          <li class="pokemon">
            <h1 @click="setActivePokemon(state.pokemon.name)">
              {{ state.pokemon.name }}
            </h1>
          </li>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, reactive } from 'vue'
import { AppState } from '../AppState'
export default {
  name: 'CaughtPokemon',
  setup() {
    const state = reactive({
      pokemon: computed(() => AppState.caughtPokemon)
    })
    return {
      state
    }
  }
}
</script>

<style>
#words{
  font-family: 'Press Start 2P', cursive;
}
</style>
