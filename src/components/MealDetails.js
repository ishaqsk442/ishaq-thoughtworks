// src/components/MealDetails.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./MealDetail.css";

function MealDetails({ mealId, onClose }) {
  const [meal, setMeal] = useState(null);

  useEffect(() => {
    if (mealId) {
      axios
        .get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
        .then((response) => {
          setMeal(response.data.meals[0]);
        });
    }
  }, [mealId]);

  if (!meal) return null;

  return (
    <div className="meal-details">
      <button onClick={onClose}>Close</button>
      <h2>{meal.strMeal}</h2>
      <img src={meal.strMealThumb} alt={meal.strMeal} />
      <p>
        <strong>Category:</strong> {meal.strCategory}
      </p>
      <p>
        <strong>Instructions:</strong> {meal.strInstructions}
      </p>
      <h3>Ingredients:</h3>
      <ul>
        {Object.keys(meal)
          .filter((key) => key.startsWith("strIngredient") && meal[key])
          .map((key) => (
            <li key={key}>
              {meal[key]} - {meal[`strMeasure${key.slice(13)}`]}
            </li>
          ))}
      </ul>
    </div>
  );
}

export default MealDetails;
