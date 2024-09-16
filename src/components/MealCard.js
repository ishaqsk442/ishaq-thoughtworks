import React from "react";
import "../App.css";
function MealCard({ meal, onShowDetails }) {
  return (
    <div className="meal-card">
      <img src={meal.strMealThumb} alt={meal.strMeal} />
      <h3>{meal.strMeal}</h3>
      <p>{meal.strCategory}</p>
      <button class="show-details" onClick={() => onShowDetails(meal.idMeal)}>
        Show Details
      </button>
    </div>
  );
}

export default MealCard;
