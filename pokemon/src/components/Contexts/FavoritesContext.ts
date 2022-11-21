import React from "react";

const FavoriteContext = React.createContext({
  favoritePokemons: [] as string[],
  updateFavoritePokemons: (id:string) => {}
});

export const FavoriteProvider = FavoriteContext.Provider;

export default FavoriteContext;
