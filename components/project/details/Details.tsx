import React, { ReactElement, useState, useEffect } from "react";
import styles from "./Details.module.scss";

import Image from "next/image";

import { JoinPool, PoolRequirements, BuyToken, ClaimToken } from "@/modals";
import { Button } from "@/shared";
import { ProgressCard } from "..";

import { useGlobalState } from "@/context";

interface Props {
  project: Project;
}

const Details = (): ReactElement => {
  const [{ projectState }] = useGlobalState();

  const [hasJoined, setHasJoined] = useState<boolean>(false);
  const [showJoinModal, setShowJoinModal] = useState<boolean>(false);
  const [showReqModal, setShowReqModal] = useState<boolean>(false);
  const [showBuyModal, setShowBuyModal] = useState<boolean>(false);
  const [showClaimsModal, setShowClaimModal] = useState<boolean>(false);

  if (!projectState?.project) {
    return <>Loading...</>;
  }

  const {
    projectName,
    logo,
    description,
    buyingToken,
    projectPhase,
    twitter,
    telegram,
    website,
  } = projectState?.project;

  return (
    <div className={styles.details}>
      <div className={styles.details_section}>
        <div className={styles.details_iconWrap}>
          <figure className={styles.details_icon}>
            <Image src={logo} width="64" height="57.33" />
          </figure>
          <div className={styles.details_badge}>
            <span>{projectPhase}</span>
          </div>
        </div>
        <div className={styles.details_title}>{projectName.slice(0, 12)}</div>
        <div className={styles.details_chain}>{buyingToken}</div>
        <div className={styles.details_desc}>{description}</div>
        <div className={styles.details_socials}>
          <a className={styles.details_social} href={telegram || "/#0"}>
            <Image src="/svg/ido-telegram-gold.svg" width="18" height="18" />
          </a>

          <a className={styles.details_social} href={website || "/#0"}>
            <Image src="/svg/ido-web-gold.svg" width="18" height="18" />
          </a>

          <a className={styles.details_social} href={twitter || "/#0"}>
            <Image src="/svg/ido-twitter-gold.svg" width="18" height="18" />
          </a>
        </div>

        {!hasJoined ? (
          <div className={styles.details_buttons}>
            <Button
              className={styles.details_button}
              type="gold-gradient"
              onClick={() => setShowJoinModal(true)}
            >
              Join Pool
            </Button>
            <Button
              className={styles.details_button}
              type="gold-200-outline"
              onClick={() => setShowReqModal(true)}
            >
              Pool Requirements
            </Button>
          </div>
        ) : (
          <div className={styles.details_buttons}>
            <Button
              className={styles.details_button}
              type="gold-gradient"
              onClick={() => setShowBuyModal(true)}
            >
              Buy Token
            </Button>
            <Button
              className={styles.details_button}
              type="gold-200-outline"
              onClick={() => setShowClaimModal(true)}
            >
              Claim Token
            </Button>
          </div>
        )}
      </div>

      <div className={styles.details_section}>
        <ProgressCard />
      </div>

      <JoinPool
        title="Join Pool"
        subtitle="Enter amount to Join pulsepad pool"
        show={showJoinModal}
        close={() => [setShowJoinModal(false), setHasJoined(true)]}
      />

      <PoolRequirements
        title="Pool requirements"
        show={showReqModal}
        close={() => setShowReqModal(false)}
      />

      <BuyToken
        title="Buy Token"
        show={showBuyModal}
        close={() => setShowBuyModal(false)}
      />

      <ClaimToken
        title="Claim Token"
        subtitle="Your token will be deposited info your wallet"
        show={showClaimsModal}
        close={() => setShowClaimModal(false)}
      />
    </div>
  );
};

export default Details;
