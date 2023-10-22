import React from "react";
import styles from "../styling/Nav.module.css"
import { useValue } from "../../ContextAip";
import { useState } from "react";
import { Link,Outlet } from "react-router-dom";


export default function Nav(){
        const {handleSearch}=useValue();
        const [search,setSearch]=useState("");

        const handleSearchs=(e)=>{
                handleSearch(e);
        }

    return(
        <>
        <div className={styles.Nav}>
                <div className={styles.title}>
                        Foody...
                </div>
                <form className={styles.searchBar} >
                        <div className={styles.inputLabel}>Find Recipes Here</div>
                        <div className={styles.inputWrap}>                       
                        <input placeholder="Chicken" className={styles.sInput} onChange={(e)=>handleSearchs(e.target.value)} /> 
                        </div>
                </form>
                <div className={styles.profile}>
                        <button className={styles.profileBtn}>
                                                        Profile
                        </button>
                        <button className={styles.profileBtn} id={styles.pBtn}>
                                                       <Link to="/Favorites"> Favotires</Link>
                        </button>

                </div>
        </div>
        <Outlet/>
        </>
    )
}