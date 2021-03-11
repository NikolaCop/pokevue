<template>
  <div class="container-fluid" id="bg">
    <div class="col m-2">
      <router-link :to="{name:'PokemonDetails', params: {name: pokemon.name}}">
        <span class="badge badge-dark p-1"><li class="pokemon ">
          <h1 id="words" @click="setActivePokemon(pokemon.name)">
            {{ pokemon.name }}
          </h1>
        </li></span>
      </router-link>
    </div>
  </div>
</template>

<script>
import { pokemonService } from '../services/PokemonService'
import { AppState } from '../AppState'
export default {
  name: 'Pokemon',
  props: {
    pokemon: Object
  },
  setup(props) {
    return {
      async setActivePokemon() {
        await pokemonService.setActivePokemon(props.pokemon.name)
        console.log(AppState.activePokemon)
      }
    }
  },
  components: {}
}
</script>

<style>

#words{
  font-family: 'Press Start 2P', cursive;
}
</style>
