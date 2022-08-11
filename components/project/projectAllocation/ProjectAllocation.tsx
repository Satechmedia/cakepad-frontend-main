import React, { ReactElement } from "react";
import styles from "./ProjectAllocation.module.scss";

import { EmptyTab } from "..";
import { Button } from "@/shared";

const ProjectAllocation = (): ReactElement => {
  return (
    <div className={styles.allocation}>
      <div className={styles.allocation_table}>
        <div className={styles.allocation_tr}>
          <h4 className={styles.allocation_th}>No</h4>
          <h4 className={styles.allocation_th}>Allocation</h4>
          <h4 className={styles.allocation_th}>Percentage</h4>
          <h4 className={styles.allocation_th}>Date</h4>
          <h4 className={styles.allocation_th}>Claim</h4>
          <h4 className={styles.allocation_th}>Action</h4>
        </div>

        <div className={styles.allocation_tr}>
          <span className={styles.allocation_td}>1</span>
          <span className={styles.allocation_td}>0.0000</span>
          <span className={styles.allocation_td}>10%</span>
          <span className={styles.allocation_td}>
            09-30-2021 15 :00 UTC - 09-30-2021 15 :00 UTC
          </span>
          <span className={styles.allocation_td}>0.0000</span>
          <span className={styles.allocation_td}>
            <Button
              className={styles.allocation_tbutton}
              type="gold-gradient"
              onClick={() => null}
            >
              Claim
            </Button>
          </span>
        </div>

        <div className={styles.allocation_tr}>
          <span className={styles.allocation_td}>2</span>
          <span className={styles.allocation_td}>0.0000</span>
          <span className={styles.allocation_td}>10%</span>
          <span className={styles.allocation_td}>
            09-30-2021 15 :00 UTC - 09-30-2021 15 :00 UTC
          </span>
          <span className={styles.allocation_td}>0.0000</span>
          <span className={styles.allocation_td}>
            <Button
              className={styles.allocation_tbutton}
              type="gold-gradient"
              onClick={() => null}
            >
              Claim
            </Button>
          </span>
        </div>

        <div className={styles.allocation_tr}>
          <span className={styles.allocation_td}>3</span>
          <span className={styles.allocation_td}>0.0000</span>
          <span className={styles.allocation_td}>10%</span>
          <span className={styles.allocation_td}>
            09-30-2021 15 :00 UTC - 09-30-2021 15 :00 UTC
          </span>
          <span className={styles.allocation_td}>0.0000</span>
          <span className={styles.allocation_td}>
            <Button
              className={styles.allocation_tbutton}
              type="gold-gradient"
              onClick={() => null}
            >
              Claim
            </Button>
          </span>
        </div>

        {/* <EmptyTab
          text="No allocation information"
          button={{ text: "Add to Metamask", action: () => null }}
        /> */}
      </div>
    </div>
  );
};

export default ProjectAllocation;
