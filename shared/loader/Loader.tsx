import styles from "./Loader.module.scss";
import React from "react";

const Loader = ({ customClass, fullScreen }: any) => {
  return (
    <div data-fullscreen={fullScreen} className={`${styles.loader} ${customClass}`}>
      <object
        width="40"
        height="40"
        type="image/svg+xml"
        data="/svg/loading-one.svg"
      />
    </div>
  );
};

export default Loader;
