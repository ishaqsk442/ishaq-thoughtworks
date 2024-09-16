import React, { useState } from "react";
import axios from "axios";
import SearchBar from "./components/SearchBar";
import MealCard from "./components/MealCard";
import MealDetails from "./components/MealDetails";
import "./App.css";

function App() {
  const [meals, setMeals] = useState([]);
  const [selectedMealId, setSelectedMealId] = useState(null);

  const searchMeals = (query) => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`)
      .then((response) => {
        setMeals(response.data.meals);
      });
  };

  const handleShowDetails = (id) => {
    setSelectedMealId(id);
  };

  const handleCloseDetails = () => {
    setSelectedMealId(null);
  };

  return (
    <div className="App">
      <SearchBar onSearch={searchMeals} />
      <div className="meal-list">
        {meals &&
          meals.map((meal) => (
            <MealCard
              key={meal.idMeal}
              meal={meal}
              onShowDetails={handleShowDetails}
            />
          ))}
      </div>
      {selectedMealId && (
        <MealDetails mealId={selectedMealId} onClose={handleCloseDetails} />
      )}
    </div>
  );
}

export default App;
