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
import Artgrid from "./components/Galleries/Artgrid";
import TestThumbnail from "./components/Galleries/TestThumbnail";
import ContactModal from "./components/Contact/ContactModal";
import About from "./components/About/About";
import SmallAbout from "./components/About/SmallAbout";
import styles from "./App.css";
//images
import mountain from "./img/photos/mountain.jpg";
import suitcase from "./img/photos/suitcase.jpg";
import bicycle from "./img/photos/bicycle.jpg";
import personBlue from "./img/photos/bluegirl.jpg";
import personEyes from "./img/photos/eyes.jpg";
import personPink from "./img/photos/glitterman.jpg";
import personOrange from "./img/photos/orangegirl.jpg";
import cherryBombRadish from "./img/photos/signage/cherryBombRadish.JPG";
import frenchRadish from "./img/photos/signage/frenchRadish.JPG";
import greenMustard from "./img/photos/signage/greenMustard.JPG";
import redMustard from "./img/photos/signage/redMustard.JPG";
import shigaTurnip from "./img/photos/signage/shigaTurnip.JPG";
//api route
import messageApi from "./utils/messageAPI";

class App extends Component {
  state = {
    width: window.innerWidth,
    modal: null,
    email: "",
    message: "",
    galleryArt: [
      {
        id: 1,
        width: null,
        side: styles.left,
        source: suitcase,
        name: "Suitcase",
      },
      {
        id: 2,
        width: null,
        side: styles.left,
        source: bicycle,
        name: "Bicycle",
      },
      {
        id: 3,
        width: null,
        side: styles.left,
        source: suitcase,
        name: "Suitcase",
      },
      {
        id: 4,
        width: null,
        side: styles.left,
        source: bicycle,
        name: "Bicycle",
      },
      {
        id: 5,
        width: null,
        side: styles.left,
        source: suitcase,
        name: "Suitcase",
      },
      {
        id: 6,
        width: null,
        side: styles.left,
        source: bicycle,
        name: "Bicycle",
      },
      {
        id: 7,
        width: null,
        side: styles.left,
        source: suitcase,
        name: "Suitcase",
      },
      {
        id: 8,
        width: null,
        side: styles.left,
        source: bicycle,
        name: "Bicycle",
      },
      {
        id: 9,
        width: null,
        side: styles.left,
        source: suitcase,
        name: "Suitcase",
      },
    ],
    illustrations: [
      {
        id: 1,
        width: null,
        side: styles.left,
        source: mountain,
        name: "Mountain",
      },
      {
        id: 2,
        width: null,
        side: styles.left,
        source: mountain,
        name: "Mountain",
      },
      {
        id: 3,
        width: null,
        side: styles.left,
        source: mountain,
        name: "Mountain",
      },
      {
        id: 4,
        width: null,
        side: styles.left,
        source: mountain,
        name: "Mountain",
      },
      {
        id: 5,
        width: null,
        side: styles.left,
        source: mountain,
        name: "Mountain",
      },
      {
        id: 6,
        width: null,
        side: styles.left,
        source: mountain,
        name: "Mountain",
      },
      {
        id: 7,
        width: null,
        side: styles.left,
        source: mountain,
        name: "Mountain",
      },
      {
        id: 8,
        width: null,
        side: styles.left,
        source: mountain,
        name: "Mountain",
      },
      {
        id: 9,
        width: null,
        side: styles.left,
        source: mountain,
        name: "Mountain",
      },
      {
        id: 10,
        width: null,
        side: styles.left,
        source: mountain,
        name: "Mountain",
      },
    ],
    portraiture: [
      {
        id: 1,
        width: null,
        side: styles.left,
        source: personOrange,
        name: "Orange",
      },
      {
        id: 2,
        width: null,
        side: styles.left,
        source: personPink,
        name: "Pink",
      },
      {
        id: 3,
        width: null,
        side: styles.left,
        source: personEyes,
        name: "Eyes",
      },
      {
        id: 4,
        width: null,
        side: styles.left,
        source: personBlue,
        name: "Blue",
      },
      {
        id: 5,
        width: null,
        side: styles.left,
        source: personOrange,
        name: "Orange",
      },
      {
        id: 6,
        width: null,
        side: styles.left,
        source: personPink,
        name: "Pink",
      },
      {
        id: 7,
        width: null,
        side: styles.left,
        source: personEyes,
        name: "Eyes",
      },
      {
        id: 8,
        width: null,
        side: styles.left,
        source: personBlue,
        name: "Blue",
      },
    ],
    signage: [
      {
        id: 1,
        width: null,
        side: styles.left,
        source: cherryBombRadish,
        name: "Cherry Bomb Radish",
      },
      {
        id: 2,
        width: null,
        side: styles.left,
        source: frenchRadish,
        name: "French Radish",
      },
      {
        id: 3,
        width: null,
        side: styles.left,
        source: greenMustard,
        name: "Green Frill Mustard",
      },
      {
        id: 4,
        width: null,
        side: styles.left,
        source: redMustard,
        name: "Red Frilled Mustard",
      },
      {
        id: 5,
        width: null,
        side: styles.left,
        source: shigaTurnip,
        name: "Shiga Turnip",
      },
    ],
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
    let source = e.target.dataset.source;
    let name = e.target.dataset.name;
    this.setState({
      modal: {
        src: source,
        name: name,
      },
    });
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
      const newMessage = {
        email: this.state.email,
        message: this.state.message,
      };

      messageApi.sendMessage(newMessage).then(data => {});
      this.closeContactModal(e);
    }
  };

  render() {
    const isMobile = this.state.width <= 667;
    const isIpad = this.state.width <= 769;
    const mobileGridMap = array => {
      let renderArray = [];
      array.map((data, props) => {
        if (array.length % 2 !== 0 && data.id === array.length) {
          data.width = styles.full;
        } else {
          data.width = styles.half;
        }
        if (data.id % 2) {
          data.side = styles.left;
        } else {
          data.side = styles.right;
        }
        renderArray.push({
          key: data.id,
          side: data.side,
          width: data.width,
          source: data.source,
          name: data.name,
        });
      });
      return renderArray;
    };
    const gridMap = array => {
      let renderArray = [];
      array.map((data, props) => {
        if (array.length % 3 === 1 && data.id === array.length) {
          data.side = styles.left;
        } else if (array.length % 3 === 2 && data.id === array.length - 1) {
          data.side = styles.left;
        } else if (array.length % 3 === 2 && data.id === array.length) {
          data.side = styles.right;
        } else if (data.id % 3 === 0) {
          data.side = styles.right;
        } else if (data.id % 3 === 1) {
          data.side = styles.left;
        } else if (data.id % 3 === 2) {
          data.side = styles.mid;
        }
        if (array.length % 3 === 1 && data.id === array.length) {
          data.width = styles.full;
        } else if (array.length % 3 === 2 && data.id > array.length - 2) {
          data.width = styles.half;
        } else if (data.id % 3 === 0 && data.id % 9 === 0) {
          data.width = styles.small;
        } else if (
          data.id % 3 === 1 &&
          (data.id % 9) / 3 > 2 &&
          (data.id % 9) / 3 <= 3
        ) {
          data.width = styles.large;
        } else if (
          data.id % 3 === 2 &&
          (data.id % 9) / 3 > 2 &&
          (data.id % 9) / 3 <= 3
        ) {
          data.width = styles.med;
        } else if (data.id % 3 === 0 && (data.id % 9) / 3 <= 1) {
          data.width = styles.med;
        } else if (data.id % 3 === 1 && (data.id % 9) / 3 <= 1) {
          data.width = styles.small;
        } else if (data.id % 3 === 2 && (data.id % 9) / 3 <= 1) {
          data.width = styles.large;
        } else if (
          data.id % 3 === 0 &&
          (data.id % 9) / 3 > 1 &&
          (data.id % 9) / 3 <= 2
        ) {
          data.width = styles.large;
        } else if (
          data.id % 3 === 1 &&
          (data.id % 9) / 3 > 1 &&
          (data.id % 9) / 3 <= 2
        ) {
          data.width = styles.med;
        } else if (
          data.id % 3 === 2 &&
          (data.id % 9) / 3 > 1 &&
          (data.id % 9) / 3 <= 2
        ) {
          data.width = styles.small;
        }
        renderArray.push({
          key: data.id,
          side: data.side,
          width: data.width,
          source: data.source,
          name: data.name,
          // openMod: this.openModal,
        });
      });
      return renderArray;
    };
    let galleryArt;
    let illustrations;
    let portraiture;
    let signage;
    if (isMobile) {
      galleryArt = mobileGridMap(this.state.galleryArt);
      illustrations = mobileGridMap(this.state.illustrations);
      portraiture = mobileGridMap(this.state.portraiture);
      signage = mobileGridMap(this.state.signage);
    } else {
      galleryArt = gridMap(this.state.galleryArt);
      illustrations = gridMap(this.state.illustrations);
      portraiture = gridMap(this.state.portraiture);
      signage = gridMap(this.state.signage);
    }

    return (
      <div>
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
        <div className={styles.parallaxWrapper}>
          <Jumbotron
            parallax={styles.parallax}
            paraChildOne={styles.parallaxChildOne}
            paraChildTwo={styles.parallaxChildTwo}
          />
          <Gallery title="Gallery Artwork">
            <Artgrid>
              {galleryArt.map((data, props) => {
                return (
                  <TestThumbnail
                    key={data.id}
                    side={data.side}
                    width={data.width}
                    source={data.source}
                    name={data.name}
                    openMod={this.openModal}
                  />
                );
              })}
            </Artgrid>
          </Gallery>
        </div>
        <Gallery title="Illustrations">
          <Artgrid>
            {illustrations.map((data, props) => {
              return (
                <TestThumbnail
                  key={data.id}
                  side={data.side}
                  width={data.width}
                  source={data.source}
                  name={data.name}
                  openMod={this.openModal}
                />
              );
            })}
          </Artgrid>
        </Gallery>
        <Gallery title="Portraiture">
          <Artgrid>
            {portraiture.map((data, props) => {
              return (
                <TestThumbnail
                  key={data.id}
                  side={data.side}
                  width={data.width}
                  source={data.source}
                  name={data.name}
                  openMod={this.openModal}
                />
              );
            })}
          </Artgrid>
        </Gallery>
        <Gallery title="Signage">
          <Artgrid>
            {signage.map((data, props) => {
              return (
                <TestThumbnail
                  key={data.id}
                  side={data.side}
                  width={data.width}
                  source={data.source}
                  name={data.name}
                  openMod={this.openModal}
                />
              );
            })}
          </Artgrid>
        </Gallery>
        {isIpad ? <SmallAbout /> : <About />}
        {this.state.modal ? (
          <Modal
            source={this.state.modal.src}
            name={this.state.modal.name}
            onSomeEvent={this.closeModal}
            modalPosition={styles.modalPosition}
            modalBackgroundPosition={styles.modalBackgroundPosition}
          />
        ) : null}
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
