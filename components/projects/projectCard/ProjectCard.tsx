import React from "react";
import styles from "./ProjectCard.module.scss";

import Image from "next/image";
import Link from "next/link";

import type { ReactElement } from "react";
import { ProgressBar } from "@/shared";

const ProjectCard = ({
  id,
  logo,
  projectName,
  description,
  buyingToken,
  hardCap,
  projectStatus,
  twitter,
  telegram,
  website,
}: Project): ReactElement => {
  return (
    <Link href={"/project/" + id}>
      <a className={styles.card}>
        <div className={styles.card_signal}>
          {projectStatus === "completed" && (
            <Image src="/svg/stop-icon.svg" width="15.16" height="15.16" />
          )}
        </div>
        <div className={styles.card_meta}>
          <div className={styles.card_header}>
            <figure className={styles.card_logo}>
              <Image src={logo} width="50" height="39" />
            </figure>
            <h3 className={styles.card_title}>{projectName.slice(0, 12)}</h3>
          </div>

          <div className={styles.card_socials}>
            <a className={styles.card_social} href={telegram || "/#0"}>
              <Image src="/svg/ido-telegram.svg" width="16" height="16" />
            </a>

            <a className={styles.card_social} href={website || "/#0"}>
              <Image src="/svg/ido-web.svg" width="16" height="16" />
            </a>

            <a className={styles.card_social} href={twitter || "/#0"}>
              <Image src="/svg/ido-twitter.svg" width="16" height="16" />
            </a>
          </div>
        </div>

        <p className={styles.card_description}>{description}</p>

        <div className={styles.card_details}>
          <p className={styles.card_detail}>
            <span>Network:</span> <span>{buyingToken}</span>
          </p>

          <p className={styles.card_detail}>
            <span>CAP:</span>{" "}
            <span>
              {hardCap}
              {buyingToken}
            </span>
          </p>

          <p className={styles.card_detail}>
            <span>Access:</span> <span>Public</span>
          </p>

          <p className={styles.card_detail}>
            <span>Swap Rate:</span> <span>1 BUSD = 1000 PLSPAD</span>
          </p>

          <p className={styles.card_detail}>
            <span>Participants:</span> <span>1732</span>
          </p>
        </div>

        <div className={styles.card_stats}>
          <p className={styles.card_progress}>
            <span>Progress</span>
            <span>98.6%</span>
          </p>
          <div className={styles.card_progressBar}>
            <ProgressBar
              percent={98.6}
              className={styles.card_progressIndicator}
            />
          </div>
          <div className={styles.card_ratio}>
            {(hardCap * 98.6) / 100}/{hardCap} {buyingToken}
          </div>
        </div>
      </a>
    </Link>
  );
};

export default ProjectCard;
