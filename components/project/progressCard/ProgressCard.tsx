import React, { ReactElement } from "react";
import styles from "./ProgressCard.module.scss";

import Image from "next/image";

import { ProgressBar } from "@/shared";
import { useGlobalState } from "@/context";

const ProgressCard = (): ReactElement => {
  const [{ projectState }] = useGlobalState();

  if (!projectState?.project) {
    return <>Loading...</>;
  }

  const { projectName, listingPrice } = projectState.project;

  return (
    <div className={styles.card}>
      <div className={styles.card_details}>
        <div className={styles.card_info}>
          <figure className={styles.card_logo}>
            <Image src="/svg/ido-two.svg" layout="fill" />
          </figure>

          <div className={styles.card_text}>
            <span className={styles.card_subtitle}>
              {projectName.slice(0, 12)}
            </span>
            <h2 className={styles.card_title}>PLSPAD</h2>
          </div>
        </div>

        <div className={styles.card_priceWrap}>
          <span className={styles.card_priceLabel}>price</span>
          <h3 className={styles.card_price}>{`$${listingPrice}`}</h3>
        </div>
      </div>

      <div className={styles.card_progress}>
        <p className={styles.card_progressPrecent}>
          <span>Progress</span>
          <span>95%</span>
        </p>
        <div className={styles.card_progressBar}>
          <ProgressBar height={20} percent={95} />
        </div>
        <div className={styles.card_progressExtra}>
          <span>100%</span>
          <span>75M/75M</span>
        </div>
      </div>

      <div className={styles.card_stats}>
        <div className={styles.card_stat}>
          <span>Token Distribution</span>
          <span>$7.5m</span>
        </div>
        <div className={styles.card_stat}>
          <span>Total Raised</span>
          <span>$125,000</span>
        </div>
      </div>
    </div>
  );
};

export default ProgressCard;
