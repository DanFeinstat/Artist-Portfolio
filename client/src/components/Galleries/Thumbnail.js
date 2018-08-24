import React from "react";
import styles from "./Thumbnail.css";

const Thumbnail = props => {
  return (
    <div>
      <div className={styles.artgrid}>
        <div
          className={styles.full + " " + styles.image}
          onClick={props.openMod}
        >
          <h2 className={styles.h2}>Title</h2>
        </div>
        <div
          className={styles.half + " " + styles.left + " " + styles.image}
          onClick={props.openMod}
        >
          <h2 className={styles.h2}>Title</h2>
        </div>
        <div
          className={styles.half + " " + styles.right + " " + styles.image}
          onClick={props.openMod}
        >
          <h2 className={styles.h2}>Title</h2>
        </div>
        <div
          className={styles.sixty + " " + styles.right + " " + styles.image}
          onClick={props.openMod}
        >
          <h2 className={styles.h2}>Title</h2>
        </div>
        <div
          className={styles.forty + " " + styles.left + " " + styles.image}
          onClick={props.openMod}
        >
          <h2 className={styles.h2}>Title</h2>
        </div>
        <div
          className={styles.small + " " + styles.left + " " + styles.image}
          onClick={props.openMod}
        >
          <h2 className={styles.h2}>Title</h2>
        </div>
        <div
          className={styles.large + " " + styles.mid + " " + styles.image}
          onClick={props.openMod}
        >
          <h2 className={styles.h2}>Title</h2>
        </div>
        <div
          className={styles.med + " " + styles.right + " " + styles.image}
          onClick={props.openMod}
        >
          <h2 className={styles.h2}>Title</h2>
        </div>
        <div
          className={styles.quart + " " + styles.left + " " + styles.image}
          onClick={props.openMod}
        >
          <h2 className={styles.h2}>Title</h2>
        </div>
        <div
          className={styles.quart + " " + styles.mid + " " + styles.image}
          onClick={props.openMod}
        >
          <h2 className={styles.h2}>Title</h2>
        </div>
        <div
          className={styles.quart + " " + styles.mid + " " + styles.image}
          onClick={props.openMod}
        >
          <h2 className={styles.h2}>Title</h2>
        </div>
        <div
          className={styles.quart + " " + styles.right + " " + styles.image}
          onClick={props.openMod}
        >
          <h2 className={styles.h2}>Title</h2>
        </div>
      </div>
    </div>
  );
};

export default Thumbnail;
