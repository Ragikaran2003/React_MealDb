import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

const FavoritesContext = createContext();
const STORAGE_KEY = "mealdb_favorites";

const loadFavoritesFormStorage = () => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (error) {
    console.log("Failed to Parse favorites from localStorage", error);
    return [];
  }
};

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState(loadFavoritesFormStorage);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites));
    } catch (error) {
      console.log("Failed to Save favorites", error);
    }
  }, [favorites]);

  const toggle = (meal) => {
    setFavorites((prev) => {
      const exists = prev.some((m) => m.idMeal == meal.idMeal);
      return exists
        ? prev.filter((m) => m.idMeal !== meal.idMeal)
        : [...prev, meal];
    });
  };

  const isFavorite = (id) => favorites.some((m) => m.idMeal === id);
  return (
    <FavoritesContext.Provider value={{ favorites, toggle, isFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error("Something went wrong");
  }
  return context;
};
