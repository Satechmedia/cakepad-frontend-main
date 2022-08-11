import React from "react";
import styles from "./LeftSidebar.module.scss";

import { Button } from "@/shared";

const LeftSidebar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebar_stat}>
        <p className={styles.sidebar_statsub}>Current APY</p>
        <h3 className={styles.sidebar_stathead}>18.83%</h3>
      </div>

      <div className={styles.sidebar_stat}>
        <p className={styles.sidebar_statsub}>Staked CKT</p>
        <h3 className={styles.sidebar_stathead}>0.000 CKT</h3>
      </div>

      <div className={styles.sidebar_stat}>
        <p className={styles.sidebar_statsub}>Earned CKT</p>
        <h3 className={styles.sidebar_stathead}>0.000 CKT</h3>
      </div>

      <Button type="gold-brown" className={styles.sidebar_btn} onClick={() => null}>
        Harvest
      </Button>
    </div>
  );
};

export default LeftSidebar;
