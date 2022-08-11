import React, { useState } from "react";
import styles from "./JoinPool.module.scss";

import { Modal, InputField, Button } from "@/shared";
import type { Props } from "@/shared/modal/Modal";

import { ConnectWallet } from "..";

const JoinPool = ({ title, subtitle, show, close }: Props) => {
  const [isConnected, setIsConnected] = useState<boolean>(false);
  const [wallet, setWallet] = useState(false);

  if (wallet) {
    return (
      <ConnectWallet
        show={wallet}
        close={() => [setWallet(false), setIsConnected(true)]}
        title="Connect Wallet"
        subtitle="Connect with one of our available wallet info providers or create a new one."
      />
    );
  }

  return (
    <Modal title={title} subtitle={subtitle} show={show} close={close}>
      <InputField label="Input amount" type="number" placeholder="0.00" />
      
      {isConnected ? (
        <Button
          type="gold-250"
          className={styles.join_button}
          onClick={() => null}
        >
          Stake
        </Button>
      ) : (
        <Button
          type="gold-faded"
          className={styles.join_button}
          onClick={() => setWallet(true)}
        >
          Connect Wallet
        </Button>
      )}
    </Modal>
  );
};

export default JoinPool;
