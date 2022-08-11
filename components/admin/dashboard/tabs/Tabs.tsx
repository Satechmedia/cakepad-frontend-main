import React, { useState } from "react";
import styles from "./Tabs.module.scss";

import Link from "next/link";
import { Button } from "@/shared";

import { useGlobalState } from "@/context";
import { setAdminFilter } from "@/context/admin";

export interface Tab {
  title: string;
  value: AdminState["adminFilter"];
}

const Tabs = () => {
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
    {
      title: "Paused",
      value: "paused",
    },
  ];

  const [activeTab, setActiveTab] = useState<number>(0);
  const [, dispatch] = useGlobalState();

  return (
    <div className={styles.tabs}>
      <div className={styles.tabs_titleBar}>
        <div className={styles.tabs_header}>
          <h1 className={styles.tabs_title}>Projects</h1>
          <p className={styles.tabs_subtitle}>View and edit your projects</p>
        </div>

        <Link href="/admin/dashboard/create-project">
          <a className={styles.tabs_titleButton}>Create a project</a>
        </Link>
      </div>

      <div className={styles.tabs_switcher}>
        <div className={styles.tabs_container}>
          {tabs.map(({ title, value }, index) => (
            <Button
              className={styles.tabs_button}
              key={index}
              onClick={() => {
                setActiveTab(index), dispatch(setAdminFilter(value));
              }}
              type={index === activeTab ? "black-700" : "transparent"}
            >
              {title}
            </Button>
          ))}
        </div>

        <div className={styles.tabs_extra}></div>
      </div>
    </div>
  );
};

export default Tabs;
