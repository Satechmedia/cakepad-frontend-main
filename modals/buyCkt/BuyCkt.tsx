import React from "react";
import styles from "./BuyCkt.module.scss";

import { Modal } from "@/shared";
import type { Props } from "@/shared/modal/Modal";

const BuyCkt = ({ title, subtitle, show, close }: Props) => {
  return (
    <Modal title={title} subtitle={subtitle} show={show} close={close}>
      <a className={styles.buy_button} target="_blank" rel="noreferer noopener">
        Buy CKT on Pancakeswap
        <img src="/svg/link-out.svg" className={styles.buy_buttonicon} />
      </a>

      <a className={styles.buy_button} target="_blank" rel="noreferer noopener">
        Buy CKT on BitMart
        <img src="/svg/link-out.svg" className={styles.buy_buttonicon} />
      </a>
    </Modal>
  );
};

export default BuyCkt;
