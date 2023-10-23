// import React, { useState, useEffect } from "react";
// import styles from "../styling/Recipe.module.css";
// import { useValue } from "../../ContextAip";

// export default function Recipe() {
//   const { name, recipeD } = useValue();

//   useEffect(() => {
//     // You can remove this useEffect if not needed
//   }, []);

//   return (
//     <div className={styles.recipe}>
//       <div className={styles.title}>
//         <div>{name}</div>
//       </div>
//       <div className={styles.imageDiv}>
//         {!recipeD || !recipeD.meals || !Array.isArray(recipeD.meals) ? (
//           <p>No recipes found.</p>
//         ) : (
//           recipeD.meals.map((recipe, i) => (
//             <div key={recipe.idMeal} className={styles.recipeItem}>
//               <img src={recipe.strMealThumb} alt={recipe.strMeal} className={styles.recipeImage} />
//               <p>{recipe.strInstructions}</p>
//               <p>Category: {recipe.strCategory}</p>
//               <p>Area: {recipe.strArea}</p>
//               <p>Tags: {recipe.strTags}</p>
//               <a href={recipe.strYoutube} target="_blank" rel="noopener noreferrer">
//                 Watch on YouTube
//               </a>
//               <p>Ingredients:</p>
//               <ul className={styles.ingredientsList}>
//                 {Array.from({ length: 20 }, (_, i) => i + 1).map((index) => {
//                   const ingredient = recipe[`strIngredient${index}`];
//                   const measurement = recipe[`strMeasure${index}`];
//                   if (ingredient && measurement) {
//                     return (
//                       <li key={index} className={styles.ingredientItem}>
//                         {ingredient}: {measurement}
//                       </li>
//                     );
//                   }
//                   return null;
//                 })}
//               </ul>
//               <p>
//                 Source: <a href={recipe.strSource} target="_blank" rel="noopener noreferrer">{recipe.strSource}</a>
//               </p>
//             </div>
//           ))
//         )}
//       </div>
//     </div>
//   );
// }


import React, { useState, useEffect } from "react";
import styles from "../styling/Recipe.module.css";
import { useValue } from "../../ContextAip";

export default function Recipe() {
  const { name, recipeD,id } = useValue();



  return (
    <div className={styles.recipe}>
      <div className={styles.title}>
      </div>
      <div className={styles.imageDiv}>
        {!recipeD || !recipeD.meals || !Array.isArray(recipeD.meals) ? (
          <p>No recipes found.</p>
        ) : (
          recipeD.meals.map((recipe, i) => (
            <div key={recipe.idMeal} className={styles.recipeItem}>
              {/* <img src={recipe.strMealThumb} alt={recipe.strMeal} className={styles.recipeImage} />
              <p>{recipe.strInstructions}</p>
              <p>Category: {recipe.strCategory}</p>
              <p>Area: {recipe.strArea}</p>
              <p>Tags: {recipe.strTags}</p>
              <a href={recipe.strYoutube} target="_blank" rel="noopener noreferrer">
                Watch on YouTube
              </a>
              <p>Ingredients:</p>
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
              <p>
                Source: <a href={recipe.strSource} target="_blank" rel="noopener noreferrer">{recipe.strSource}</a>
              </p> */}


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
                      </div>

        {/*------------------ ---------------------------------------------------------------------------------------------------------------------------- */}
                      <div className={styles.details}>
                         <div className={styles.Name}>{name}</div>
                          <div className={styles.howToCook}><span className={styles.htcs}>How to cook:-</span>{recipe.strInstructions}</div>
                        </div>
                        {/* <div className={styles.howToCood}></div> */}
            </div>
          ))
        )}
      </div>
    </div>
  );
}
