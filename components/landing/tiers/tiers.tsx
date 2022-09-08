import React from "react";
import styles from "./Tiers.module.scss";

import Image from "next/image";

const Tiers = () => {
  return (
    <div className={styles.participate}>
      <h2 className={styles.participate_header}>Cakepad Tiers</h2>
      <h4 className={styles.participate_headers}>
              Guarantee Whitelist</h4>
      <div className={styles.participate_items}>
        <img
          src="/svg/participate-line.svg"
          className={styles.participate_line}
        />

        <div className={styles.participate_item}>
          {/* <figure className={styles.participate_itemicon}>
            <Image src="/svg/participate-three.svg" layout="fill" />
          </figure> */}
          <div className={styles.participate_textcontainer}>
            <h3 className={styles.participate_title}> Basic</h3>
            <p className={styles.participate_text}>
              50,000 CKT staked.
            </p>
            <h3 className={styles.participate_tex}>
              Pool weight: 5
            </h3>
          </div>
        </div>

        <div className={styles.participate_item}>
          {/* <figure className={styles.participate_itemicon}>
            <Image src="/svg/participate-three.svg" layout="fill" />
          </figure> */}
          <div className={styles.participate_textcontainer}>
            <h3 className={styles.participate_title}>Standard</h3>
            <p className={styles.participate_text}>
              150,000 CKT staked.
            </p>
            <h3 className={styles.participate_tex}>
              Pool weight: 10
            </h3>
          </div>
        </div>

        <div className={styles.participate_item}>
          {/* <figure className={styles.participate_itemicon}>
            <Image src="/svg/participate-three.svg" layout="fill" />
          </figure> */}
          <div className={styles.participate_textcontainer}>
            <h3 className={styles.participate_title}>Gold</h3>
            <p className={styles.participate_text}>
              250,000 CKT staked.
            </p>
            <h3 className={styles.participate_tex}>
              Pool weight: 22
            </h3>
          </div>
        </div>
        <div className={styles.participate_item}>
          {/* <figure className={styles.participate_itemicon}>
            <Image src="/svg/participate-three.svg" layout="fill" />
          </figure> */}
          <div className={styles.participate_textcontainer}>
            <h3 className={styles.participate_title}>Platinum</h3>
            <p className={styles.participate_text}>
              600,000 CKT staked.
            </p>
            <h3 className={styles.participate_tex}>
              Pool weight: 48
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tiers;
