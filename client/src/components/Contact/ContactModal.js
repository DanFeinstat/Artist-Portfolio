import React from "react";
import styles from "./ContactModal.css";

const ContactModal = props => {
  return (
    <div>
      <div className={styles.modal} id="modal">
        <div className={styles.paper}>
          <h5 className={styles.h5}>Name</h5>
          <input className={styles.input} placeholder="Your name here..." />
          <h5 className={styles.h5}>Message</h5>
          <textarea
            className={styles.textarea}
            placeholder="Add a message..."
          />
          <button className={styles.btn} onClick={props.onSomeEvent}>
            Submit
          </button>
        </div>
      </div>
      <div
        className={styles.backdrop}
        onClick={props.onSomeEvent}
        id="modal-backdrop"
      />
    </div>
  );
};

export default ContactModal;
