import React from "react";
import styles from "./Preloader.module.scss";
import loaderGif from "../../assets/img/loadingspinner.gif";

export const Preloader = ({ hasMenu }: { hasMenu?: boolean }) => {
  return (
    <div className={styles.root}>
      <img
        src={loaderGif}
        style={{ marginTop: hasMenu ? "-10vh" : "0" }}
        alt=""
      />
    </div>
  );
};
