import React, { useState } from "react";
import styles from "./StakingForm.module.scss";

import { RightSidebar, LeftSidebar } from "..";
import { Button } from "@/shared";

import { Insect } from "react-insect";

const StakingForm = () => {
  const [value, setValue] = useState<string>("");

  return (
    <div className={styles.staking}>
      <RightSidebar />
      <div className={styles.staking_form}>
        <div className={styles.staking_formhead}>
          <h3 className={styles.staking_formtitle}>Stake CKT</h3>
          <p className={styles.staking_formbalance}>
            Balance: <span>0.00000</span>
          </p>
        </div>

        <div className={styles.staking_formfield}>
          <Insect
            name=""
            type="number"
            placeholder="0.00"
            value={value}
            inputClass={styles.staking_forminput}
            onChange={(e) => setValue(String(e.currentTarget.value))}
          />
          <span className={styles.staking_formaction}>MAX</span>
        </div>

        <Button
          type="gold-brown"
          className={styles.staking_btn}
          onClick={() => null}
        >
          Approve
        </Button>

        <Button
          type="gold-brown"
          className={styles.staking_btn}
          onClick={() => null}
        >
          Stake
        </Button>
      </div>
      <LeftSidebar />
    </div>
  );
};

export default StakingForm;
