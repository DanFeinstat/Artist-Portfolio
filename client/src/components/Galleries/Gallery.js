import React from "react";
import styles from "./Gallery.css";

const Gallery = props => {
  return (
    <div className={styles.gallery} id={props.title}>
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>{props.title}</h1>
      </div>
      <div className="artContainer">{props.children}</div>
    </div>
  );
};

export default Gallery;
