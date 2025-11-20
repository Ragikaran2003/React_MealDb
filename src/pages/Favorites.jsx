import React from "react";
import useFavorites from "../hooks/useFavorites";
import { FaHeart } from "react-icons/fa";
import MealCard from "../components/MealCard";
import { Link } from "react-router-dom";

const Favorites = () => {
  const { favorites } = useFavorites();
  return (
    <div>
      <div className="max-w-6xl mx-auto p-4 bg-gray-50 min-h-screen">
        <h1 className="flex items-center gap-2 text-2xl font-semibold mb-6 text-emerald-900">
          <FaHeart /> <span>Favorite Meals</span>
        </h1>
        {favorites.length === 0 ? (
          <p>You haven't added any favorites yet <Link to={`/`} className="text-blue-600 underline">Explore meals</Link></p>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {favorites.map((meal) => (
              <MealCard key={meal.idMeal} meal={meal} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Favorites;
