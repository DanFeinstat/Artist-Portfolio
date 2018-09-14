import React from "react";
import styles from "./Jumbotron.css";

const Jumbotron = props => {
  return (
    <div className={styles.jumbo}>
      <h1 className={styles.header}>Victoria Bloedau</h1>
      <p className={styles.subheader}>Artist. Chef. Notable Badass.</p>
    </div>
  );
};

export default Jumbotron;
