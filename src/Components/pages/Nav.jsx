import React from "react";
import styles from "./Nav.module.css"


export default function Nav(){
    return(
        <div className={styles.Nav}>
                <div className={styles.title}>
                        Foody...
                </div>
                <div className={styles.searchBar}>
                        <div className={styles.inputLabel}>Find Recipes Here</div>
                        <input placeholder="chicken" className={styles.sInput}/>
                </div>
        </div>
    )
}