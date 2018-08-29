import React from "react";
import styles from "./ContactModal.css";

const ContactModal = props => {
  return (
    <div>
      <div className={styles.modal} id="modal">
        <div className={styles.paper}>
          <h5 className={styles.h5}>Email</h5>
          <input
            className={styles.input}
            name="email"
            placeholder="Your email here..."
            onChange={props.handleInput}
          />
          <h5 className={styles.h5} name="message">
            Message
          </h5>
          <textarea
            className={styles.textarea}
            onChange={props.handleInput}
            name="message"
            placeholder="Add a message..."
          />
          <button className={styles.btn} onClick={props.handleSub}>
            Submit
          </button>
        </div>
      </div>
      <div
        className={styles.backdrop}
        onClick={props.onOutsideClick}
        id="modal-backdrop"
      />
    </div>
  );
};

export default ContactModal;
