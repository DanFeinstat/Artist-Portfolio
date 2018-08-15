import React from "react";
import styles from "./Jumbotron.css";

const Jumbotron = props => {
  return (
    <div className={styles.jumbo + " jumbotron jumbotron-fluid"}>
      <div className={"container-fluid " + styles.container}>
        <div className="row">
          <h1 className={styles.clear}>Victoria Bloedau</h1>
          <p className={"lead " + styles.clear}>
            Artist. Chef. Notable Badass.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Jumbotron;
