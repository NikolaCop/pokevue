<template>
  <div v-if="state.pokemon.sprites" class="card" style="width: 18rem;">
    <img class="card-img-top" :src="state.pokemon.sprites.front_default" alt="Card image cap">
    <div class="card-body">
      <h2 class="card-text text-center" id="words">
        {{ state.pokemon.name }}
      </h2>
      <button type="button" class="btn btn-outline-danger" @click="catchPokemon()">
        <img src="https://art.ngfiles.com/images/386000/386577_stardoge_8-bit-pokeball.png?f1446737358" class="img-fluid ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|}" alt="">
        Catch!
      </button>
    </div>
  </div>
  <div v-else class="">
    <img src="https://thumbs.gfycat.com/GenerousTimelyBrontosaurus-max-1mb.gif" alt="">
  </div>
</template>

<script>
import { onMounted, reactive, computed } from 'vue'
import { AppState } from '../AppState'
import { pokemonService } from '../services/PokemonService'
import { useRoute, useRouter } from 'vue-router'

export default {
  name: 'PokemonDetails',
  setup() {
    const router = useRouter()
    const route = useRoute()
    const state = reactive({
      pokemon: computed(() => AppState.activePokemon)
    })
    onMounted(() => {
      pokemonService.getPokeApi(route.params.name)
    })
    return {
      route,
      state,
      catchPokemon() {
        AppState.caughtPokemon = AppState.activePokemon
        router.push({ name: 'CaughtPokemon' })
      }
    }
  },
  components: {}

}
</script>

<style>
@import url('https://use.fontawesome.com/releases/v5.15.2/css/all.css');
#words{
  font-family: 'Press Start 2P', cursive;
}

</style>
