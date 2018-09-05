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
        onContextMenu="return false"
      />
      <h2 className={styles.h2}>{props.name}</h2>
    </div>
  );
};

export default TestThumbnail;
