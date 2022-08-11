import React from "react";
import styles from "./ProjectsGrid.module.scss";

import type { ReactElement } from "react";
import { ProjectCard } from "..";
import { useGlobalState } from "@/context";

import { NoticeBox } from "@/shared";

interface Props {
  projects: Project[];
}

const ProjectsGrid = ({ projects }: Props): ReactElement => {
  const [{ appState }] = useGlobalState();

  const filtered = projects.filter(
    (item) => item.projectStatus === appState?.projectsFilter
  );

  return (
    <>
      {filtered.length > 0 && (
        <div className={styles.projects}>
          {filtered.map((item: any, index: number) => (
            <ProjectCard key={index} {...item} />
          ))}
        </div>
      )}
      {filtered?.length === 0 && (
        <div className={styles.projects_empty} >
          <NoticeBox
          message="No Projects Available"
          customClass="custom-table-margin"
        />
        </div>
      )}
    </>
  );
};

export default ProjectsGrid;
