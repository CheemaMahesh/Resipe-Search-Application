import React from "react";
import { useValue } from "../../ContextAip";
import styles from "../styling/Trending.module.css";
import { Link } from "react-router-dom";


export default function Trending(){
    const {trending,handlePageName}=useValue();
    return(
        <div className={styles.trending}>
            <div className={styles.heading}>Trending Now</div>

            <div className={styles.resipepage}>
            {!trending || !trending.meals || !Array.isArray(trending.meals)?<p>No recipes found.</p>:
             trending.meals.map((d,i)=>{
                return( <Link className={styles.resipe} to="/Recipe" onClick={()=>handlePageName(d.strMeal,d.idMeal)} key={i}>
                 <img src={d.strMealThumb}  className={styles.mealImg}/>
                 <h1 className={styles.mealName}>{d.strMeal}</h1>

                </Link>)
             })
            }
            </div>

           

        </div>
    )
}