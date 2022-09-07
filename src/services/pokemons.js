const URL = "https://pokeapi.co/api/v2/pokemon?limit=151";

export const getPokemons = () => {
  return fetch(URL).then((response) => response.json());
};
