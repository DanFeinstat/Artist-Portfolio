import React from "react";
import styles from "./About.css";
import selfPic from "../../img/photos/VBAbout.jpg";

const About = props => {
  return (
    <div className={styles.container} id="About">
      <div className={styles.third}>
        <img
          className={styles.aboutPic}
          src={selfPic}
          alt="Portrait of Victoria"
        />
      </div>
      <div className={styles.twoThirds}>
        <div className={styles.contentContainer}>
          <h4 className={styles.title}>About the Artist</h4>
          <p className={styles.content}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
