import React from "react";
import { useValue } from "../../ContextAip";
import styles from "../styling/Meat.module.css";


export default function Meat(){
    const {trending,meat}=useValue();


    return(
        <div className={styles.trending}>
            <div className={styles.heading}>Recipes with Meat</div>

            <div className={styles.resipepage}>
            {/* {!meat || !meat.meals || !Array.isArray(meat.meals)?<p>No recipes found.</p>: */}
             {meat.map((d)=>{
                return( <div className={styles.resipe}>
                 <img src={d.strMealThumb}  className={styles.mealImg}/>
                 <h1 className={styles.mealName}>{d.strMeal}</h1>

                </div>)
             })}
            {/* } */}
            </div>

           

        </div>
    )
}