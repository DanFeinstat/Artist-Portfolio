import React, { Component } from "react";
import ReactDOM from "react-dom";
import Navbar from "./components/Navbar/Navbar";
import SmallMenu from "./components/DropDownMenu/SmallMenu";
import DropDownMenu from "./components/DropDownMenu/DropDownMenu";
import Jumbotron from "./components/Jumbotron/Jumbotron";
// import GalleryNav from "./components/GalleryNav/GalleryNav";
// import GalleryArtNav from "./components/GalleryNav/GalleryArtNav";
import Gallery from "./components/Galleries/Gallery";
import Thumbnail from "./components/Galleries/Thumbnail";
import SmallTN from "./components/Galleries/SmallTN";
import Modal from "./components/Galleries/Modal";
import ContactModal from "./components/Contact/ContactModal";
import About from "./components/About/About";
import SmallAbout from "./components/About/SmallAbout";
import styles from "./App.css";
class App extends Component {
  state = {
    width: window.innerWidth,
    modal: null,
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

  scrollToTarget = e => {
    let name = e.target.innerHTML;
    console.log(name);
    let galleryDiv = ReactDOM.findDOMNode(document.getElementById(name));
    galleryDiv.scrollIntoView({ behavior: "smooth" }, true);
  };

  openModal = e => {
    e.preventDefault();
    this.setState({ modal: true });
  };
  closeModal = e => {
    e.preventDefault();
    this.setState({ modal: null });
  };

  openContactModal = e => {
    e.preventDefault();
    this.setState({ contactModal: true });
  };
  closeContactModal = e => {
    e.preventDefault();
    this.setState({ contactModal: null });
  };

  render() {
    const isMobile = this.state.width <= 667;
    const isIpad = this.state.width <= 769;
    return (
      <div className={styles.parallaxContainer}>
        <Navbar
          width={this.state.width}
          openMod={this.openContactModal}
          scrollTarget={this.scrollToTarget}
        >
          {isMobile ? (
            <SmallMenu
              openMod={this.openContactModal}
              // scrollTarget={this.scrollToTarget}
            />
          ) : (
            <DropDownMenu />
          )}
        </Navbar>
        <Jumbotron />
        <Gallery title="Gallery Artwork">
          {isMobile ? (
            <SmallTN openMod={this.openModal} />
          ) : (
            <Thumbnail openMod={this.openModal} />
          )}
        </Gallery>
        <Gallery title="Illustrations" />
        <Gallery title="Portraiture" />
        <Gallery title="Signage" />
        {isIpad ? <SmallAbout /> : <About />}
        {this.state.modal ? <Modal onSomeEvent={this.closeModal} /> : null}
        {this.state.contactModal ? (
          <ContactModal onSomeEvent={this.closeContactModal} />
        ) : null}
      </div>
    );
  }
}

export default App;
