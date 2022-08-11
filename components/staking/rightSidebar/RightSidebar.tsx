import React from "react";
import styles from "./RightSidebar.module.scss";

import Image from "next/image";

const RightSidebar = () => {
  return (
    <div className={styles.sidebar}>
      <figure className={styles.sidebar_bg} >
        <Image layout="fill" src="/svg/staking-bg.svg" />
      </figure>
      
      <h3 className={styles.sidebar_title}>Stake CKT in DQ Allocation Model</h3>
      <p className={styles.sidebar_text}>
        This pool provides a prize pool and allocation according to the amount
        of CKT you deposit. There is a 10% withdraw fee taken for all new CKT
        deposits within 20days later from deposit date.
        <br /> <br /> All these fees are accumulated in a fee wallet of CakePad
        and sent to the burn address regularly. Please check your penalty status
        before withdraw
      </p>
    </div>
  );
};

export default RightSidebar;
