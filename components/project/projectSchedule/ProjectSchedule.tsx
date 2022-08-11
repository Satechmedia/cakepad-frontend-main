import React from "react";
import styles from "./ProjectSchedule.module.scss";

import { EmptyTab } from "..";

const ProjectSchedule = () => {
  return (
    <div className={styles.schedule}>
      <div className={styles.schedule_table}>
        <div className={styles.schedule_tr}>
          <h4 className={styles.schedule_th}>Round</h4>
          <h4 className={styles.schedule_th}>Opens</h4>
          <h4 className={styles.schedule_th}>Closes</h4>
        </div>

        <div className={styles.schedule_tr}>
          <span className={styles.schedule_td}>Allocation</span>
          <span className={styles.schedule_td}>
            09 - 30 <span className={styles.schedule_tdDivider} />
            13 : 25 UTC
          </span>
          <span className={styles.schedule_td}>
            09 - 30 <span className={styles.schedule_tdDivider} />
            13 : 25 UTC
          </span>
        </div>

        <div className={styles.schedule_tr}>
          <span className={styles.schedule_td}>FCFS - Prepare</span>
          <span className={styles.schedule_td}>
            09 - 30 <span className={styles.schedule_tdDivider} />
            13 : 25 UTC
          </span>
          <span className={styles.schedule_td}>
            09 - 30 <span className={styles.schedule_tdDivider} />
            13 : 25 UTC
          </span>
        </div>

        <div className={styles.schedule_tr}>
          <span className={styles.schedule_td}>Cap</span>
          <span className={styles.schedule_td}>
            09 - 30 <span className={styles.schedule_tdDivider} />
            13 : 25 UTC
          </span>
          <span className={styles.schedule_td}>
            09 - 30 <span className={styles.schedule_tdDivider} />
            13 : 25 UTC
          </span>
        </div>

        {/* <EmptyTab text="No schedule information" /> */}
      </div>
    </div>
  );
};

export default ProjectSchedule;
