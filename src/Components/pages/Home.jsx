import React from "react";
import { useValue } from "../../ContextAip";
import styles from "./Home.module.css"

export default function Home() {
  const { recipes } = useValue();

  if (!recipes || !recipes.results || !Array.isArray(recipes.results)) {
    return <p>No recipes found.</p>;
  }

  return (
    <ul>
      {recipes.results.map((recipe) => (
        <li key={recipe.id}>
          <h1>{recipe.title}</h1>
          <img src={recipe.image} style={{ height: "100px", width: "100px" }} />
        </li>
      ))}
    </ul>
  );
}
