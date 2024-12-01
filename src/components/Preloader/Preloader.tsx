import React from "react";
import styles from "./Preloader.module.scss";
import loaderGif from "../../assets/img/loadingspinner.gif";

export const Preloader = () => {
  return (
    <div className={styles.root}>
      <img src={loaderGif} alt="" />
    </div>
  );
};
