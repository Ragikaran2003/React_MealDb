import { useEffect, useState } from "react";

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

export default function useFavorites() {
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
  return { favorites, toggle, isFavorite };
}
