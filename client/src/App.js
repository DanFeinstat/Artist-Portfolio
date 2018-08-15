import React, { Component } from "react";
import Navbar from "./components/Navbar/Navbar";
import SmallMenu from "./components/DropDownMenu/SmallMenu";
import DropDownMenu from "./components/DropDownMenu/DropDownMenu";
import Jumbotron from "./components/Jumbotron/Jumbotron";
import GalleryNav from "./components/GalleryNav/GalleryNav";
import GalleryArtNav from "./components/GalleryNav/GalleryArtNav";
import Gallery from "./components/Galleries/Gallery";
import Thumbnail from "./components/Galleries/Thumbnail";
import Modal from "./components/Galleries/Modal";

class App extends Component {
  state = {
    width: window.innerWidth,
    modal: null,
    // gallery: null,
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

  selectGallery = event => {
    event.preventDefault();
    console.log("gallery");
    this.setState({ gallery: "gallery" });
  };

  openModal = e => {
    e.preventDefault();
    this.setState({ modal: true });
  };
  closeModal = e => {
    e.preventDefault();
    this.setState({ modal: null });
  };

  render() {
    const isMobile = this.state.width <= 667;
    return (
      <div>
        <Navbar width={this.state.width}>
          {isMobile ? <SmallMenu /> : <DropDownMenu />}
        </Navbar>
        <Jumbotron />
        <Gallery title="Gallery Artwork">
          <Thumbnail openMod={this.openModal} />
        </Gallery>
        <Gallery title="Illustrations" />
        <Gallery title="Portraiture" />
        <Gallery title="Signage" />
        {/* <GalleryNav>
          <GalleryArtNav gallery="Gallery Art" onClick={this.selectGallery} />
          <GalleryArtNav gallery="Illustrations" />
          <GalleryArtNav gallery="Portraiture" />
          <GalleryArtNav gallery="Signage" />
        </GalleryNav> */}
        {this.state.modal ? <Modal onSomeEvent={this.closeModal} /> : null}
      </div>
    );
  }
}

export default App;
