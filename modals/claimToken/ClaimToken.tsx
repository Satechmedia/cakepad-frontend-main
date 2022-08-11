import React from "react";
import styles from "./ClaimToken.module.scss";

import { Modal, Button } from "@/shared";
import type { Props } from "@/shared/modal/Modal";

const ClaimToken = ({ title, subtitle, show, close }: Props) => {
  return (
    <Modal title={title} subtitle={subtitle} show={show}>
      <Button
        type="gold-250"
        className={styles.claim_button}
        onClick={close ? close : () => null}
      >
        Okay!
      </Button>
    </Modal>
  );
};

export default ClaimToken;
