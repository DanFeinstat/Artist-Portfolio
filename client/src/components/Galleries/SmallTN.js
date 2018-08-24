import React from "react";
import styles from "./SmallTN.css";
import mountain from "../../img/photos/mountain.jpg";

const SmallTN = props => {
  return (
    <div>
      <div className={styles.artgrid}>
        <div
          className={
            styles.half + " " + styles.left + " " + styles.imageContainer
          }
        >
          <img
            src={mountain}
            alt="mountain"
            className={styles.full + " " + styles.image}
            onClick={props.openMod}
          />
          <h2 className={styles.h2}>Title</h2>
        </div>
        <div
          className={
            styles.half + " " + styles.right + " " + styles.imageContainer
          }
        >
          <img
            src={mountain}
            alt="mountain"
            className={styles.full + " " + styles.image}
            onClick={props.openMod}
          />
          <h2 className={styles.h2}>Title</h2>
        </div>
        <div
          className={
            styles.half + " " + styles.left + " " + styles.imageContainer
          }
        >
          <img
            src={mountain}
            alt="mountain"
            className={styles.full + " " + styles.image}
            onClick={props.openMod}
          />
          <h2 className={styles.h2}>Title</h2>
        </div>
        <div
          className={
            styles.half + " " + styles.right + " " + styles.imageContainer
          }
        >
          <img
            src={mountain}
            alt="mountain"
            className={styles.full + " " + styles.image}
            onClick={props.openMod}
          />
          <h2 className={styles.h2}>Title</h2>
        </div>
        <div
          className={
            styles.half + " " + styles.left + " " + styles.imageContainer
          }
        >
          <img
            src={mountain}
            alt="mountain"
            className={styles.full + " " + styles.image}
            onClick={props.openMod}
          />
          <h2 className={styles.h2}>Title</h2>
        </div>
        <div
          className={
            styles.half + " " + styles.right + " " + styles.imageContainer
          }
        >
          <img
            src={mountain}
            alt="mountain"
            className={styles.full + " " + styles.image}
            onClick={props.openMod}
          />
          <h2 className={styles.h2}>Title</h2>
        </div>
        <div
          className={
            styles.half + " " + styles.left + " " + styles.imageContainer
          }
        >
          <img
            src={mountain}
            alt="mountain"
            className={styles.full + " " + styles.image}
            onClick={props.openMod}
          />
          <h2 className={styles.h2}>Title</h2>
        </div>
        <div
          className={
            styles.half + " " + styles.right + " " + styles.imageContainer
          }
        >
          <img
            src={mountain}
            alt="mountain"
            className={styles.full + " " + styles.image}
            onClick={props.openMod}
          />
          <h2 className={styles.h2}>Title</h2>
        </div>
      </div>
    </div>
  );
};

export default SmallTN;
