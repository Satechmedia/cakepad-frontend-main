import React, { ReactElement, useState } from "react";
import styles from "./Tabs.module.scss";

import { Button } from "@/shared";
import { ProjectInfo, ProjectSchedule, ProjectAllocation } from "..";

const Tabs = (): ReactElement => {
  const [activeTab, setActiveTab] = useState<number>(1);
  const tabs = ["Project Info", "Schedule", "Allocation"];

  return (
    <div className={styles.tabs}>
      <div className={styles.tabs_buttons}>
        {tabs.map((item, index) => (
          <Button
            type="transparent"
            key={index}
            onClick={() => setActiveTab(index + 1)}
            className={`${styles.tabs_button} ${
              activeTab === index + 1 && styles.tabs_button__active
            }`}
          >
            {item}
          </Button>
        ))}

        <span
          className={styles.tabs_indicator}
          style={{
            left:
              activeTab === 2 ? "33.333%" : activeTab === 3 ? "66.666%" : "0",
          }}
        ></span>
      </div>

      <div className={styles.tabs_divider}>
        <span></span>
      </div>

      <div className={styles.tabs_content}>
        {
          [
            <ProjectInfo key={0} />,
            <ProjectSchedule key={1} />,
            <ProjectAllocation key={2} />,
          ][activeTab - 1]
        }
      </div>
    </div>
  );
};

export default Tabs;
