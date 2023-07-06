import React from "react";
import styles from "./Cards.module.css";

const Cards = ({ results }) => {
  let display;
  if (results) {
    display = results.map((x) => {
      let { id, name, image, location, status } = x;
      return (
        <div key={id} className="col-4 mb-4 position-relative">
          <div className={styles.cards}>
            <img
              src={image}
              alt="character image"
              className={`${styles.img} img-fluid`}
            />
            <div className={`${styles.imgP} content`}>
              <div className="fs-4 fw-bold mb-4 text-light">{name}</div>
              <div className="">
                <div className="fs-6 text-light">Last Location</div>
                <div className="fs-5 text-light">{location.name}</div>
              </div>
            </div>
          </div>
          {(() => {
            if (status === "Dead") {
              return (
                <div
                  className={`${styles.badge} position-absolute badge bg-danger`}
                >
                  {status}
                </div>
              );
            } else if (status === "Alive") {
              return (
                <div
                  className={`${styles.badge} position-absolute badge bg-success`}
                >
                  {status}
                </div>
              );
            } else {
              return (
                <div
                  className={`${styles.badge} position-absolute badge bg-dark`}
                >
                  {status}
                </div>
              );
            }
          })()}
        </div>
      );
    });
  } else {
    display = "No characters found";
  }

  return <>{display}</>;
};

export default Cards;
