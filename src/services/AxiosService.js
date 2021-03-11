import Axios from 'axios'

export const baseURL = window.location.origin.includes('localhost') ? 'http://localhost:3000' : ''
// @ts-ignore
export const pokeApi = Axios.create({
  baseURL: 'https://pokeapi.co/api/v2/pokemon',
  timeout: 10000
})
// @ts-ignore
export const sandApi = Axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/api/dallen/pokemon',
  timeout: 10000
})

export const setBearer = function(bearer) {
  pokeApi.defaults.headers.authorization = bearer
}

export const resetBearer = function() {
  pokeApi.defaults.headers.authorization = ''
}
