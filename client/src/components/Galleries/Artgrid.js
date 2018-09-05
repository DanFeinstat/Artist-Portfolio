import React from "react";
import styles from "./Artgrid.css";

const Artgrid = props => {
  return <div className={styles.artgrid}>{props.children}</div>;
};

export default Artgrid;
