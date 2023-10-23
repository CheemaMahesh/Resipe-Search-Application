import React from "react";
import { useValue } from "../../ContextAip";
import styles from "../styling/Meat.module.css";
import { Link } from "react-router-dom";


//Meat Component
export default function Meat(){
    const {trending,meat,handlePageName}=useValue();


    return(
        <div className={styles.trending}>
            <div className={styles.heading}>&emsp;&emsp;Recipes with Meat</div>

            <div className={styles.resipepage}>

                {/* ====================================Providing the Recipes with Meat========================= */}
             {meat.map((d,i)=>{
                return( <Link className={styles.resipe} to="/Recipe" onClick={()=>handlePageName(d.strMeal,d.idMeal)} key={i}>
                 <img src={d.strMealThumb}  className={styles.mealImg}/>
                 <h1 className={styles.mealName}>{d.strMeal}</h1>
                </Link>)
             })}
            </div>

           

        </div>
    )
}