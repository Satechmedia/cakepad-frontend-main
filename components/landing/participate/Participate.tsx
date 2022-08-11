import React from "react";
import styles from "./Participate.module.scss";

import Image from "next/image";

const Participate = () => {
  return (
    <div className={styles.participate}>
      <h2 className={styles.participate_header}>How to Participate</h2>
      <div className={styles.participate_items}>
        <img
          src="/svg/participate-line.svg"
          className={styles.participate_line}
        />

        <div className={styles.participate_item}>
          <figure className={styles.participate_itemicon}>
            <Image src="/svg/participate-one.svg" layout="fill" />
          </figure>
          <div className={styles.participate_textcontainer}>
            <h3 className={styles.participate_title}>Connect wallet</h3>
            <p className={styles.participate_text}>
              Connect using any of the available wallets.
            </p>
          </div>
        </div>

        <div className={styles.participate_item}>
          <figure className={styles.participate_itemicon}>
            <Image src="/svg/participate-two.svg" layout="fill" />
          </figure>
          <div className={styles.participate_textcontainer}>
            <h3 className={styles.participate_title}>Stake</h3>
            <p className={styles.participate_text}>
              Stake CKT to become eligible to join IDOs.
            </p>
          </div>
        </div>

        <div className={styles.participate_item}>
          <figure className={styles.participate_itemicon}>
            <Image src="/svg/participate-three.svg" layout="fill" />
          </figure>
          <div className={styles.participate_textcontainer}>
            <h3 className={styles.participate_title}>Join Pool</h3>
            <p className={styles.participate_text}>
              Join an ongoing IDO to get whitelisted for that project.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Participate;
