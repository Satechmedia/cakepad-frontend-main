import React, { useState } from "react";
import type { ReactElement } from "react";
import styles from "./TabBar.module.scss";

import Link from "next/link";
import { Button } from "@/shared";

import { useGlobalState } from "@/context";
import { setProjectsFilter } from "@/context/app";

export interface Tab {
  title: string;
  value: AppState["projectsFilter"];
}

const TabBar = (): ReactElement => {
  const tabs: Tab[] = [
    {
      title: "Active",
      value: "active",
    },
    {
      title: "Closed",
      value: "completed",
    },
    {
      title: "Coming Soon",
      value: "unlisted",
    },
  ];

  const [activeTab, setActiveTab] = useState<number>(0);
  const [ , dispatch] = useGlobalState();
  

  return (
    <div className={styles.tabs}>
      <div className={styles.tabs_container}>
        {tabs.map(({ title, value }, index) => (
          <Button
            className={styles.tabs_button}
            key={index}
            onClick={() => {
              setActiveTab(index), dispatch(setProjectsFilter(value));
            }}
            type={index === activeTab ? "black-700" : "transparent"}
          >
            {title}
          </Button>
        ))}
      </div>

      <div className={styles.tabs_extra}>
        <Link href="#">
          <a href="#" className={styles.tabs_cta}>
            Apply for IDO
          </a>
        </Link>
      </div>
    </div>
  );
};

export default TabBar;
