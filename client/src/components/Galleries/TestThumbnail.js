import React from "react";
import styles from "./TestThumbnail.css";

const TestThumbnail = props => {
  return (
    <div
      className={styles.imageContainer + " " + props.side + " " + props.width}
    >
      <img
        src={props.source}
        alt={props.name}
        className={styles.full + " " + styles.image}
        onClick={props.openMod}
        data-source={props.source}
        data-name={props.name}
      />
      <h2
        className={styles.h2}
        data-source={props.source}
        data-name={props.name}
        onClick={props.openMod}
      >
        {props.name}
      </h2>
    </div>
  );
};

export default TestThumbnail;
