import React from "react";
import { useValue } from "../../ContextAip";

export default function Home() {
  const { recipes } = useValue();

  if (!recipes || recipes.meals.length===0 || !Array.isArray(recipes.meals)) {
    // Handle the case when recipes or meals are undefined, null, or not an array
    return <p>No recipes found.</p>;
  }

  return (
    <ul>
      {recipes.meals.map((recipe) => (
        <li key={recipe.idMeal}>
        <h1>{recipe.strMeal}</h1>
        <img src={recipe.strMealThumb} style={{ height: "100px", width: "100px" }} />
      </li>
      ))}
    </ul>
  );
}
