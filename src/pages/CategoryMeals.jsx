import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMealsByCategory } from "../api/mealdb";
import LoadingSpinner from "../components/LoadingSpinner";
import MealCard from "../components/MealCard";

const CategoryMeals = () => {
  const { category } = useParams();
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMealsByCategory(category)
      .then((res) => {
        setMeals(res.data.meals || []);
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h1 className="text-3xl font-bold capitalize mb-6 text-emerald-800"></h1>
      {meals.length === 0 ? (
        <p className="text-center text-gray-600">No Meals found</p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {
            meals.map((meal)=> (<MealCard key={meal.idMeal} meal={meal}/>))
          }
        </div>
      )}
    </div>
  );
};

export default CategoryMeals;
