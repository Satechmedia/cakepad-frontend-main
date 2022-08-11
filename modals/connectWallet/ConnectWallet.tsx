import React from "react";
import styles from "./ConnectWallet.module.scss";

import Image from "next/image";

import { wallets } from "@/mock";
import { Modal } from "@/shared";
import type { Props } from "@/shared/modal/Modal";

const ConnectWallet = ({ title, subtitle, show, close }: Props) => {
  const availableWallets = wallets.filter((wallet) => !wallet.disabled);

  return (
    <Modal title={title} subtitle={subtitle} show={show} close={close}>
      <div className={styles.connect}>
        {availableWallets.map((wallet, index) => (
          <div className={styles.connect_box} key={index}>
            <figure className={styles.connect_icon}>
              <Image src={wallet.img} layout="fill" />
            </figure>
            <p className={styles.connect_text} >{wallet.name}</p>
          </div>
        ))}
      </div>
    </Modal>
  );
};

export default ConnectWallet;
