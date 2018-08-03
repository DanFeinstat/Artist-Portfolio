import React, { Component } from "react";
import styles from "./Navbar.css";
import DropDownMenu from "../DropDownMenu/DropDownMenu";
import SmallMenu from "../DropDownMenu/SmallMenu";
import instaIcon from "../../img/icons/instagram.svg";

class Navbar extends Component {
  state = {
    width: window.innerWidth,
  };
  componentWillMount() {
    window.addEventListener("resize", this.handleWindowSizeChange);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  };
  render() {
    const { width } = this.state;
    const isMobile = width <= 667;
    return (
      <nav
        className={
          styles.nav +
          " navbar navbar-expand-lg fixed-top navbar-light bg-success"
        }
      >
        <a href="/">
          <h1 className={styles.logo}>VB</h1>
        </a>
        {isMobile ? (
          <div className={styles.container}>
            <SmallMenu />
          </div>
        ) : (
          <div className={styles.container}>
            <button className={styles.btn}>About</button>
            <DropDownMenu />
            <button className={styles.btn}>Contact</button>
            <button className={styles.btn}>
              <img className={styles.insta} src={instaIcon} alt="Instagram" />
            </button>
          </div>
        )}
      </nav>
    );
  }
}

export default Navbar;
