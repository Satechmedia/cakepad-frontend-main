import React, { useState } from "react";
import styles from "./PoolRequirements.module.scss";

import { Modal, Button } from "@/shared";
import type { Props } from "@/shared/modal/Modal";

const PoolRequirements = ({ title, subtitle, show, close }: Props) => {
  const [hasKyc, setHaskyc] = useState<boolean>(false);

  return (
    <Modal title={title} subtitle={subtitle} show={show} close={close}>
      <div className={styles.requirements}>
        <ol className={styles.requirements_list}>
          <li className={styles.requirements_item}>1. Have CKT balance</li>
          <li className={styles.requirements_item}>2. Complete KYC</li>
        </ol>
        {hasKyc ? (
          <Button
            type="green-200"
            iconSuffix="/svg/check-white.svg"
            className={styles.requirements_button}
            onClick={() => setHaskyc(true)}
          >
            Completed
          </Button>
        ) : (
          <Button
            type="gold-250"
            className={styles.requirements_button}
            onClick={() => setHaskyc(true)}
          >
            Start KYC
          </Button>
        )}
      </div>
    </Modal>
  );
};

export default PoolRequirements;
