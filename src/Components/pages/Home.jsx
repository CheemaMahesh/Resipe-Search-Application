import React, { useState } from "react";
import { useValue } from "../../ContextAip";
import styles from "./Home.module.css";

export default function Home() {
  const { recipes } = useValue();

  const itemPerPage = 8;
  const [currentPage, setCurrentPage] = useState(1);
  const sIndex = (currentPage - 1) * itemPerPage;
  const eIndex = itemPerPage + sIndex;
  const totalPages = recipes && recipes.meals ? Math.ceil(recipes.meals.length / itemPerPage):2;
  const res = recipes && recipes.meals ? recipes.meals.slice(sIndex, eIndex) : [];

  const handlePages = (e) => {
    setCurrentPage(e);
  };

  return (
    <div className={styles.Home}>
      <h2>Your Recipes</h2>
      <ul>
        {!recipes || !recipes.meals || !Array.isArray(recipes.meals) ? (
          <p>No recipes found.</p>
        ) : (
          res.map((recipe, i) => (
            <li key={i}>
              <h1>{recipe.strMeal}</h1>
              <img src={recipe.strMealThumb} alt={recipe.strMeal} />
            </li>
          ))
        )}
      </ul>
      <div className={styles.btnDiv}>
        <button onClick={() => handlePages(currentPage - 1)} disabled={currentPage === 1} className={styles.btns}>
          Prev
        </button>
        <span><h1>{currentPage}</h1></span>

        <button onClick={() => handlePages(currentPage + 1)} disabled={currentPage === totalPages} className={styles.btns}>
          Next
        </button>
      </div>
    </div>
  );
}
