import React, { useState } from "react";
import styles from "./Hero.module.scss";

import Link from "next/link";
import Image from "next/image";

import { Button } from "@/shared";
import { BuyCkt } from "@/modals";

const Hero = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className={styles.hero}>
      <div className={styles.hero_inner}>
        <h1 className={styles.hero_text}>CakePad</h1>
        <p className={styles.hero_subtext}>
          Fetch Real-Time Charts to analyze market movements, track the growth
          of Cake projects, and develop profitable investment strategies.
        </p>
        <div className={styles.hero_buttons}>
          <Link href="https://cakepad.caketools.io">
            <a className={styles.hero_cta}>Launch App</a>
          </Link>

          <Link href="/">
            <a href="https://forms.gle/51exxJyh5BmfXrMR9" target="_blank" rel="noreferrer"
            className={styles.hero_cta}>Apply for IDO</a>
          </Link>

          <Button
            type="gold-gradient"
            className={styles.hero_cta}
            onClick={() => setShowModal(true)}
          >
            Buy CKT
          </Button>
        </div>
      </div>

      <figure data-type="circle" className={styles.hero_shape}>
        <Image src="/svg/float-circle.svg" layout="fill" />
      </figure>
      <figure data-type="diamond" className={styles.hero_shape}>
        <Image src="/svg/float-diamond.svg" layout="fill" />
      </figure>
      <figure data-type="hexagon" className={styles.hero_shape}>
        <Image src="/svg/float-hexagon.svg" layout="fill" />
      </figure>
      <figure data-type="semi-circle" className={styles.hero_shape}>
        <Image src="/svg/float-semi-circle.svg" layout="fill" />
      </figure>
      <figure data-type="square" className={styles.hero_shape}>
        <Image src="/svg/float-square.svg" layout="fill" />
      </figure>
      <figure data-type="triangle" className={styles.hero_shape}>
        <Image src="/svg/float-triangle.svg" layout="fill" />
      </figure>

      <BuyCkt
        show={showModal}
        close={() => setShowModal(false)}
        title="Buy CKT"
        subtitle="Buy ckt from any of our trusted exchanges"
      />
    </div>
  );
};

export default Hero;
