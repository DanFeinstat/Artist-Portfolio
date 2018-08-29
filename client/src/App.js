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
    email: "",
    message: "",
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

  //scroll navigation for nav bar
  scrollToTarget = e => {
    let name = e.target.innerHTML;
    console.log(name);
    let galleryDiv = ReactDOM.findDOMNode(document.getElementById(name));
    galleryDiv.scrollIntoView({ behavior: "smooth" }, true);
  };

  //art modals
  openModal = e => {
    e.preventDefault();
    this.setState({ modal: true });
  };
  closeModal = e => {
    e.preventDefault();
    this.setState({ modal: null });
  };

  //contact the artist modal
  openContactModal = e => {
    e.preventDefault();
    this.setState({ contactModal: true });
  };
  closeContactModal = e => {
    e.preventDefault();
    this.setState({ contactModal: null });
  };

  handleInputChange = e => {
    let value = e.target.value;
    let name = e.target.name;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (!this.state.email && !this.state.message) {
      this.closeContactModal(e);
    } else if (!this.state.email) {
      alert("Please enter your email.");
    } else if (!this.state.message) {
      alert("Please enter a message");
    } else {
      let validateEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (!validateEmail.test(this.state.email)) {
        alert("That email address is invalid.");
      }
      //else do something
    }
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
          <ContactModal
            onOutsideClick={this.closeContactModal}
            handleInput={this.handleInputChange}
            handleSub={this.handleSubmit}
          />
        ) : null}
      </div>
    );
  }
}

export default App;
