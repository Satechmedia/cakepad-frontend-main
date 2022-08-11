import React from "react";
import styles from "./ProgressBar.module.scss";

const ProgressBar = ({ height = 7, radius = 30, percent, className }: any) => {
  return (
    <div className={styles.progress}>
      <div
        className={`${styles.progress_inner} ${className}`}
        style={{ height: `${height / 10}rem`, borderRadius: `${radius}px` }}
      >
        <div
          className={styles.progress_bar}
          style={{ width: `${percent}%`, borderRadius: `${radius}px` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
