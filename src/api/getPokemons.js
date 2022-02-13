import axios from 'axios';

export const getPokemons = (limit = 151) =>
  axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`).then((response) => response.data);

export const getPokemonsWithDetails = (pokemons) => {
  return Promise.all(pokemons.map((pokemon) => axios.get(pokemon.url))).then(
    (pokemonResponses) => {
      return pokemonResponses.map((response) => response.data);
    }
  );
};
