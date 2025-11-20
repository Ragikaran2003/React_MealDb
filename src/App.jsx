import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import CategoryMeals from "./pages/CategoryMeals";
import MealDetails from "./pages/MealDetails";
import { FavoritesProvider } from "./contexts/FavoritesContext";
import Favorites from "./pages/Favorites";
import SearchResults from "./pages/SearchResults";

const App = () => {
  return (
    <BrowserRouter>
      <FavoritesProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path={`/category/:category`} element={<CategoryMeals />} />
          <Route path={`/meal/:id`} element={<MealDetails />} />
          <Route path={`/favorites`} element={<Favorites />} />
          <Route path={`/search`} element={<SearchResults />} />
        </Routes>
      </FavoritesProvider>
    </BrowserRouter>
  );
};

export default App;
