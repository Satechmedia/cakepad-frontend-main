import React from "react";
import styles from "./StatBoxes.module.scss";

const StatBoxes = () => {
  return (
    <div className={styles.grid}>
      <div className={styles.grid_box}>
        <p className={styles.grid_subtitle}>Total CKT Staked</p>
        <h2 className={styles.grid_title}>3M</h2>
      </div>

      <div className={styles.grid_box}>
        <p className={styles.grid_subtitle}>Total Distributd Reward</p>
        <h2 className={styles.grid_title}>41.2k CKT</h2>
      </div>

      <div className={styles.grid_box}>
        <p className={styles.grid_subtitle}>Reward Per Block</p>
        <h2 className={styles.grid_title}>0.13 CKT</h2>
      </div>

      <div className={styles.grid_box}>
        <p className={styles.grid_subtitle}>Pool End Block Number</p>
        <h2 className={styles.grid_title}>16453292 Blocks</h2>
      </div>
    </div>
  );
};

export default StatBoxes;
