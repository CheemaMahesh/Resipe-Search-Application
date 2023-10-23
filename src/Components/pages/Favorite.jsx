import React from "react";
import { useValue } from "../../ContextAip";
import styles from "../styling/Favorite.module.css";
import { Link } from "react-router-dom";

export default function Favorite() {
  const { favItems, handlePageName } = useValue();

  return (
    <div className={styles.trending}>
      <div className={styles.heading}>Favorite Recipes</div>

      <div className={styles.resipepage}>
        {favItems.map((d, i) => {
          return (
            <Link className={styles.resipe} to="/Recipe" onClick={() => handlePageName(d.strMeal, d.idMeal)} key={i}>
              <img src={d.strMealThumb} className={styles.mealImg} alt={d.strMeal}/>
              <h1 className={styles.mealName}>{d.strMeal}</h1>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
