import React, { useState, useEffect } from "react";
import styles from "../styling/Recipe.module.css";
import { useValue } from "../../ContextAip";

export default function Recipe() {
  const { name, recipeD,id ,handleFavorites} = useValue();



  return (
    <div className={styles.recipe}>
      
      <div className={styles.imageDiv}>
        {!recipeD || !recipeD.meals || !Array.isArray(recipeD.meals) ? (
          <p>No recipes found.</p>
        ) : (
          recipeD.meals.map((recipe, i) => (
            <div key={recipe.idMeal} className={styles.recipeItem}>
              


                {/* =====================Img-==================================== */}
                      <div className={styles.imgDiv}>
                                    <img src={recipe.strMealThumb} alt={recipe.strMeal} className={styles.recipeImage}/>
                                    <p> {id % 2 === 0 ? (
            <div className={styles.stars}>
              &#9733;&#9733;&#9733;&#9733; <span className={styles.rrrr}>{id/2} Ratings</span>
            </div>
          ) : (
            <div className={styles.stars}>
              &#9733;&#9733;&#9733; <span className={styles.rrrr}>{Math.ceil(id/3)} Ratings</span>
            </div>
          )}</p>
          <div className={styles.timeADifficultyAserv}>
                <div className={styles.header}> <span>&#x1F552; </span><span>&#127859; </span><span> &#127869; </span></div>
                <div className={styles.footer}><span>15 mins</span><span>Easy</span><span>Serv 4</span></div>
          </div>
          <div className={styles.buttonss}>
                  <div className={styles.additionalD}>
                          <div className={styles.adHeader}>
                            <span>Category</span> <span>Area</span><span>Tags</span>
                          </div>
                          <div className={styles.adFooter}>
                            <span>{recipe.strCategory}</span><span>{recipe.strArea}</span><span>{recipe.strTags}</span>
                          </div>

                  </div>
                  <div className={styles.favs}> 
                        <div className={styles.favorites} onClick={()=>handleFavorites(recipe.strMeal)}>AddFav</div>
                        <div className={styles.video}><a href={recipe.strYoutube} target="_blank" rel="noopener noreferrer" className={styles.Youtube}>YouTube</a></div>
                  </div>
                  <div></div>
          </div>
                      </div>

        {/*------------------ ---------------------------------------------------------------------------------------------------------------------------- */}
                      <div className={styles.details}>
                         <div className={styles.Name}>{name}</div>
                          <div className={styles.howToCook}><span className={styles.htcs}>How to cook:-</span>{recipe.strInstructions}</div>
                          <div className={styles.ingr}>

                          <h3>Ingredients:</h3>
              <ul className={styles.ingredientsList}>
                {Array.from({ length: 20 }, (_, i) => i + 1).map((index) => {
                  const ingredient = recipe[`strIngredient${index}`];
                  const measurement = recipe[`strMeasure${index}`];
                  if (ingredient && measurement) {
                    return (
                      <li key={index} className={styles.ingredientItem}>
                        {ingredient}: {measurement}
                      </li>
                    );
                  }
                  return null;
                })}
              </ul>
                          </div>

                        </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
