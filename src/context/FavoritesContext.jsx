import { createContext, useContext, useState } from "react";

const FavoriteContext = createContext();

const FavoriteContextProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const handleToggleFavorites = (favProd) => {
    const found = favorites.find((fav) => fav.id === favProd.id);

    if (!found) {
      setFavorites([...favorites, favProd]);
    } else {
      setFavorites(favorites.filter((fav) => fav.id !== favProd.id));
    }
  };

  const isFavoriteProduct = (favProd) =>
    favorites.some((fav) => fav.id === favProd.id);

  const value = {
    favorites,
    favoritesCount: favorites.length,
    handleToggleFavorites,
    isFavoriteProduct,
  };
  return (
    <FavoriteContext.Provider value={value}>
      {children}
    </FavoriteContext.Provider>
  );
};

export const useFavoriteContext = () => useContext(FavoriteContext);

export default FavoriteContextProvider;
