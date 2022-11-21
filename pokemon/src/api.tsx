


export type pokemon={url: string}
export type pokemondata={url: string}


export const searchPokemon = async (pokemon:string) => {
    try {
      pokemon =pokemon.toLowerCase();
      let url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
      const response = await fetch(url);
      const data = await response.json();
      return data;
    } catch (err) {}
  };
  
  export const getPokemons = async (limit = 25, offset = 0): Promise <{results:pokemon[], count: number}> => {
    try {
      let url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;
      const response = await fetch(url);
      const data = await response.json();
      return data;
    } catch (err) {}
    return {results:[], count: 0}
  };
  
  export const getPokemonData = async (url:string) :Promise <pokemondata | null > => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      return data;
    } catch (err) {}
    return null

  };
  