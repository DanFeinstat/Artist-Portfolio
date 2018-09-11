import React from "react";
import styles from "./Modal.css";
// import mountain from "../../img/photos/mountain.jpg";

const Modal = props => {
  return (
    <div onClick={props.onSomeEvent}>
      <div className={styles.modal} id="modal">
        <img className={styles.image} src={props.source} alt={props.name} />
      </div>
      <div className={styles.backdrop} id="modal-backdrop" />
    </div>
  );
};

export default Modal;
