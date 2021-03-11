import { AppState } from '../AppState'
import { pokeApi } from './AxiosService'

let pokemon = {}
class PokemonService {
  constructor() {
    console.log('Hello from the Poke Api Service')
    this.getPokeApi()
  }

  async setActivePokemon(name) {
    try {
      const res = await pokeApi.get(name)
      console.log('setactive pokemon response', res)
      setTimeout(this.loaderTest, 5000)
      // eslint-disable-next-line no-unused-vars
      pokemon = res.data

      // AppState.activePokemon = res.data
    } catch (error) {
      console.error(error)
    }
  }

  loaderTest() {
    AppState.activePokemon = pokemon
  }

  async getPokeApi() {
    try {
      const res = await pokeApi.get('')
      AppState.pokemon = res.data.results
      console.log(res)
    } catch (error) {
      console.error(error)
    }
  }

  async nextPokemonSet() {
    try {
      const res = await pokeApi.get('https://pokeapi.co/api/v2/pokemon?offset=20&limit=20')
      AppState.pokeApi = res.data.results
    } catch (error) {
    }
  }
}
export const pokemonService = new PokemonService()
