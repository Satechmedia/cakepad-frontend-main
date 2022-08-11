import React from "react";
import styles from "./BuyToken.module.scss";

import { Modal, InputField, Button } from "@/shared";
import type { Props } from "@/shared/modal/Modal";

const BuyToken = ({ title, subtitle, show, close }: Props) => {
  return (
    <Modal title={title} subtitle={subtitle} show={show} close={close}>
      <InputField label="Input amount" type="number" placeholder="0.00" />
      <div className={styles.buy_rates}>
        <span>1 BUSD</span>
        <span>2 CKT</span>
      </div>

      <Button
        type="gold-250"
        className={styles.buy_button}
        onClick={() => null}
      >
        Buy
      </Button>
    </Modal>
  );
};

export default BuyToken;
