import React from "react";
import styles from "./Nav.module.css"
import { useValue } from "../../ContextAip";
import { useState } from "react";


export default function Nav(){
        const {handleSearch}=useValue();
        const [search,setSearch]=useState("");

        const handleSearchs=(e)=>{
                e.preventDefault();
                handleSearch(search);
        }

    return(
        <div className={styles.Nav}>
                <div className={styles.title}>
                        Foody...
                </div>
                <form className={styles.searchBar} onSubmit={handleSearchs}>
                        <div className={styles.inputLabel}>Find Recipes Here</div>
                        <div className={styles.inputWrap}>                       
                        <input placeholder="chicken" className={styles.sInput} onChange={(e)=>setSearch(e.target.value)}/> <button className={styles.searchBtn}>Search</button>
                        </div>
                </form>
                <div className={styles.profile}>
                        <button className={styles.profileBtn}>
                                                        Profile
                        </button>
                        <button className={styles.profileBtn} id={styles.pBtn}>
                                                        Favotires
                        </button>

                </div>
        </div>
    )
}