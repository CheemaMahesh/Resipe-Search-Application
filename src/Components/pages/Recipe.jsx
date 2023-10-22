import React, { useState } from "react";
import styles from "../styling/Recipe.module.css";
import { useValue } from "../../ContextAip";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faStar } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";

export default function Recipe() {
  // You're using useState for a variable 'd', but it's not used in your code.
  // You might remove it if it's not needed in your component.
  const [stars, setStars] = useState("");

  // You're using 'useValue' to get the 'name' and 'id' props.
  const { name, id } = useValue();

  // Determine the number of stars based on the 'id' prop.
useEffect(()=>{
    let a = id % 2 === 0 ? 4 : 3;
    setStars(a)
},[id])

  return (
    <div className={styles.recipe}>
      <div className={styles.title}>
        <div>{name}</div>
        <div>
          {stars === 4 ? (
            <div className={styles.stars}>
              &#9733;&#9733;&#9733;&#9733;
            </div>
          ) : (
            <div className={styles.stars}>
                  &#9733;&#9733;&#9733;
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
