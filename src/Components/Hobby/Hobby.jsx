import React from "react";
import styles from "./Hobby.module.css";

const Hobby = ({ title, description }) => {
  return (
    <div className={styles.hobby}>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.description}>{description}</p>
    </div>
  );
};

export default Hobby;
