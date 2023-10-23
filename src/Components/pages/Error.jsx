import React from "react";
import { Link } from "react-router-dom";
import styles from "../styling/Error.module.css";

export default function Error() {
  return (
    <div className={styles.errorContainer}>
      <h1 className={styles.errorMessage}>Oops! Something went wrong.</h1>
      <p className={styles.errorDescription}>
        It seems like there was an issue or The Page does not exists. Please try again or go back to the home page.
      </p>
      <Link to="/" className={styles.homeLink}>
        Back to Home
      </Link>
    </div>
  );
}
