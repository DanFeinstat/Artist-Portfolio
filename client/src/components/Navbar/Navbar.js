import React from "react";
import styles from "./Navbar.css";
import instaIcon from "../../img/icons/instagram.svg";
import instaIconTwo from "../../img/icons/instaImage.svg";

const Navbar = props => {
  const isMobile = props.width <= 667;
  return (
    <nav className={styles.nav}>
      <a href="/">
        <h1 className={styles.logo}>VB</h1>
      </a>
      {isMobile ? (
        <div className={styles.container}>
          {/* <SmallMenu /> */}
          {props.children}
        </div>
      ) : (
        <div className={styles.container}>
          <button className={styles.btn} onClick={props.scrollTarget}>
            About
          </button>
          {/* <DropDownMenu /> */}
          {props.children}
          <button className={styles.btn} onClick={props.openMod}>
            Contact
          </button>

          <a
            className={styles.instaBtn}
            href="https://www.instagram.com/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className={styles.insta} src={instaIcon} alt="Instagram" />
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
