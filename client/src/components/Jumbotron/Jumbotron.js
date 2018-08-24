import React from "react";
import styles from "./Jumbotron.css";

const Jumbotron = props => {
  return (
    <div className={styles.jumbo}>
      {/* <div className={styles.container}> */}
      {/* <div className="row"> */}
      <h1 className={styles.header}>Victoria Bloedau</h1>
      <p className={styles.subheader}>Artist. Chef. Notable Badass.</p>
      {/* </div> */}
      {/* </div> */}
    </div>
  );
};

export default Jumbotron;
