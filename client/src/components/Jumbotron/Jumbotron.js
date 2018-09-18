import React from "react";
import styles from "./Jumbotron.css";

const Jumbotron = props => {
  return (
    <div className={styles.jumbo + " " + props.parallax}>
      <h1 className={styles.header + " " + props.paraChildOne}>
        Victoria Bloedau
      </h1>
      <p className={styles.subheader + " " + props.paraChildTwo}>
        Artist. Chef. Notable Badass.
      </p>
    </div>
  );
};

export default Jumbotron;
