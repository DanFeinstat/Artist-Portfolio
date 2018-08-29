import React from "react";
import ReactDOM from "react-dom";
import styles from "./DropDownMenu.css";
// import menuIcon from "../../img/icons/menu.svg";

class DropDownMenu extends React.Component {
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

  scrollToGallery = e => {
    let name = e.target.innerHTML;
    console.log(name);
    let galleryDiv = ReactDOM.findDOMNode(document.getElementById(name));
    galleryDiv.scrollIntoView({ behavior: "smooth" }, true);
  };

  render() {
    return (
      <div
        className={styles.container}
        ref={node => {
          this.node = node;
        }}
      >
        <button className={styles.btn} onClick={this.toggleMenu}>
          Galleries
        </button>
        {this.state.showMenu && (
          <ul className={styles.menu}>
            <li className={styles.item} onClick={this.scrollToGallery}>
              Gallery Artwork
            </li>
            <li className={styles.item} onClick={this.scrollToGallery}>
              Illustrations
            </li>
            <li className={styles.item} onClick={this.scrollToGallery}>
              Portraiture
            </li>
            <li className={styles.item} onClick={this.scrollToGallery}>
              Signage
            </li>
          </ul>
        )}
      </div>
    );
  }
}

export default DropDownMenu;
