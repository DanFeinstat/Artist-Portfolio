import React from "react";
import styles from "./GalleryNavBtn.css";

const GalleryNavBtn = props => {
  return (
    <div className={"col-md-3 " + styles.wrapper}>
      <div className={styles.gnBtn}>
        <h4>{props.gallery}</h4>
      </div>
    </div>
  );
};

export default GalleryNavBtn;

// {/* <div class="card bg-dark text-white">
//   <img class="card-img" src=".../100px270/#55595c:#373a3c/text:Card image" alt="Card image">
//   <div class="card-img-overlay">
//     <h5 class="card-title">Card title</h5>
//     <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
//     <p class="card-text">Last updated 3 mins ago</p>
//   </div>
// </div> */}
