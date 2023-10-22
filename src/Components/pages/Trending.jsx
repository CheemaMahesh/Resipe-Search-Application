import React from "react";
import { useValue } from "../../ContextAip";
import styles from "../styling/Trending.module.css";


export default function Trending(){
    const {trending}=useValue();
    return(
        <div className={styles.trending}>
            <div className={styles.heading}>Trending Now</div>

            <div className={styles.resipepage}>
            {!trending || !trending.meals || !Array.isArray(trending.meals)?<p>No recipes found.</p>:
             trending.meals.map((d)=>{
                return( <div className={styles.resipe}>
                 <img src={d.strMealThumb}  className={styles.mealImg}/>
                 <h1 className={styles.mealName}>{d.strMeal}</h1>

                </div>)
             })
            }
            </div>

           

        </div>
    )
}