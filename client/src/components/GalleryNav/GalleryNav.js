import React from "react";
import styles from "./GalleryNav.css";

const GalleryNav = props => {
  return (
    // <div className={styles.nav + " jumbotron jumbotron-fluid"}>
    <div className={"container-fluid " + styles.nav}>
      <div className={"row " + styles.wrapper}>{props.children}</div>
    </div>
    // </div>
  );
};

export default GalleryNav;
