import React from "react";
import styles from "./Apply.module.scss";

import Link from "next/link";
import Image from "next/image";

const Apply = () => {
  return (
    <div className={styles.apply}>
      <div className={styles.apply_inner}>
        <h2 className={styles.apply_title}>Apply for IDO</h2>
        <p className={styles.apply_subtitle}>
          If you have an idea for a project or are working on one and would like
          to apply for incubation, click on the button below;
        </p>
        <Link href="/">
          <a className={styles.apply_cta}>Apply Now</a>
        </Link>
      </div>
      
      <div className={styles.apply_shapes}>
        <figure data-type="circle" className={styles.apply_shape}>
          <Image src="/svg/float-circle.svg" layout="fill" />
        </figure>
        <figure data-type="diamond" className={styles.apply_shape}>
          <Image src="/svg/float-diamond.svg" layout="fill" />
        </figure>
        <figure data-type="hexagon" className={styles.apply_shape}>
          <Image src="/svg/float-hexagon.svg" layout="fill" />
        </figure>
        <figure data-type="semi-circle" className={styles.apply_shape}>
          <Image src="/svg/float-semi-circle.svg" layout="fill" />
        </figure>
        <figure data-type="square" className={styles.apply_shape}>
          <Image src="/svg/float-square.svg" layout="fill" />
        </figure>
        <figure data-type="triangle" className={styles.apply_shape}>
          <Image src="/svg/float-triangle.svg" layout="fill" />
        </figure>
      </div>
    </div>
  );
};

export default Apply;
