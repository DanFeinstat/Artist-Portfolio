import React from "react";
import styles from "./DropDownMenu.css";
import menuIcon from "../../img/icons/menu.svg";

class SmallMenu extends React.Component {
  constructor() {
    super();

    this.toggleMenu = this.toggleMenu.bind(this);
    this.handleOutsideClick = this.handleOutsideClick.bind(this);

    this.state = {
      showMenu: false,
    };
  }

  toggleMenu() {
    if (!this.state.showMenu) {
      // attach/remove event handler
      document.addEventListener("click", this.handleOutsideClick, false);
    } else {
      document.removeEventListener("click", this.handleOutsideClick, false);
    }

    this.setState(prevState => ({
      showMenu: !prevState.showMenu,
    }));
  }

  handleOutsideClick(e) {
    // ignore clicks on the component itself
    if (this.node.contains(e.target)) {
      return;
    }

    this.toggleMenu();
  }

  render() {
    return (
      <div
        className={styles.container}
        ref={node => {
          this.node = node;
        }}
      >
        <button className={styles.menuBtn} onClick={this.toggleMenu}>
          <img src={menuIcon} alt="menu" />
        </button>
        {this.state.showMenu && (
          <ul className={styles.menu}>
            <li className={styles.item}>Signage</li>
            <li className={styles.item}>Portraiture</li>
            <li className={styles.item}>Illustrations</li>
            <li className={styles.item}>Gallery Artwork</li>
            <li className={styles.item}>About</li>
            <li className={styles.item}>Contact</li>
            <li className={styles.item}>Insta</li>
          </ul>
        )}
      </div>
    );
  }
}

export default SmallMenu;
