import React from "react";
import styles from "./Features.module.scss";

import Image from "next/image";

const Features = () => {
  return (
    <div className={styles.features}>
      <div className={styles.features_item}>
        <figure className={styles.feature_icon}>
          <Image src="/svg/perk-one.svg" layout="fill" />
        </figure>
        <p className={styles.feature_text}>Fair and Transparent</p>
      </div>

      <div className={styles.features_item}>
        <figure className={styles.feature_icon}>
          <Image src="/svg/perk-two.svg" layout="fill" />
        </figure>
        <p className={styles.feature_text}>Rug-proof Mechanisms</p>
      </div>

      <div className={styles.features_item}>
        <figure className={styles.feature_icon}>
          <Image src="/svg/perk-three.svg" layout="fill" />
        </figure>
        <p className={styles.feature_text}>Guaranteed Allocations</p>
      </div>

      <div className={styles.features_item}>
        <figure className={styles.feature_icon}>
          <Image src="/svg/perk-four.svg" layout="fill" />
        </figure>
        <p className={styles.feature_text}>High-Quality Projects</p>
      </div>
    </div>
  );
};

export default Features;
