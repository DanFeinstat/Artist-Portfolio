import React from "react";
import styles from "./Gallery.css";

const Gallery = props => {
  return (
    <div className={"container-fluid " + styles.gallery} id={props.title}>
      <div className="row">
        <div className="col-12">
          <h1 className={"mx-auto " + styles.title}>{props.title}</h1>
        </div>
      </div>
      <div className="row">{props.children}</div>
    </div>
  );
};

export default Gallery;
