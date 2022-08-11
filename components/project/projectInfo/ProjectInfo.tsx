import React, { ReactElement } from "react";
import styles from "./ProjectInfo.module.scss";

import { useGlobalState } from "@/context";

const ProjectInfo = (): ReactElement => {
  const [{ projectState }] = useGlobalState();

  if (!projectState?.project) {
    return <>Loading...</>;
  }

  const { projectName, hardCap } = projectState.project;

  return (
    <div className={styles.info}>
      <div className={styles.info_section}>
        <h3 className={styles.info_title}>Pool Information</h3>

        <div className={styles.info_wrapper}>
          <div className={styles.info_table}>
            <div className={styles.info_tr}>
              <span className={styles.info_td}>Opens</span>
              <span className={styles.info_td}>
                09 - 30 <span className={styles.info_tdDivider} />
                13 : 25 UTC
              </span>
            </div>

            <div className={styles.info_tr}>
              <span className={styles.info_td}>FCFS Opens</span>
              <span className={styles.info_td}>
                09 - 30 <span className={styles.info_tdDivider} />
                13 : 25 UTC
              </span>
            </div>

            <div className={styles.info_tr}>
              <span className={styles.info_td}>Closes</span>
              <span className={styles.info_td}>
                09 - 30 <span className={styles.info_tdDivider} />
                13 : 25 UTC
              </span>
            </div>

            <div className={styles.info_tr}>
              <span className={styles.info_td}>Swap Rate</span>
              <span className={styles.info_td}>1 USD = 200.0000 PLSPAD</span>
            </div>

            <div className={styles.info_tr}>
              <span className={styles.info_td}>Cap</span>
              <span className={styles.info_td}>{hardCap} BUSD</span>
            </div>

            <div className={styles.info_tr}>
              <span className={styles.info_td}>Total Users Participated</span>
              <span className={styles.info_td}>509</span>
            </div>

            <div className={styles.info_tr}>
              <span className={styles.info_td}>Total Funds Swapped</span>
              <span className={styles.info_td}>125222.7934 BUSD</span>
            </div>

            <div className={styles.info_tr}>
              <span className={styles.info_td}>Access Type</span>
              <span className={styles.info_td}>Private</span>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.info_section}>
        <h3 className={styles.info_title}>Token Information</h3>

        <div className={styles.info_wrapper}>
          <div className={styles.info_table}>
            <div className={styles.info_tr}>
              <span className={styles.info_td}>Name</span>
              <span className={styles.info_td}>{projectName}</span>
            </div>

            <div className={styles.info_tr}>
              <span className={styles.info_td}>Token Symbol</span>
              <span className={styles.info_td}>PLSPAD</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectInfo;
