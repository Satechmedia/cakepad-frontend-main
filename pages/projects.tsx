import React from "react";
import type { ReactElement } from "react";
import type { GetStaticProps } from 'next'

import { MainLayout } from "@/layout";
import { Seo } from "@/shared";
import { TabBar, ProjectsGrid } from "@/components/projects";

import { API, PROJECT } from "@/api";

interface Props {
  projects: Project[];
}

const Projects = ({ projects }: Props): ReactElement => {
  return (
    <>
      <Seo title="Projects | Cakepad" />
      <TabBar />
      <ProjectsGrid projects={projects} />
    </>
  );
};

Projects.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout page="projects">{page}</MainLayout>;
};

export default Projects;

export const getStaticProps: GetStaticProps = async (context) => {
  let projects: Project[] = [];

  try {
    // fetch projects
    const { data } = await API.get<{ data: Project[] }>(PROJECT);

    // get array from response
    projects = data.data;
  } catch (error) {
    // log errors to console
    console.log(error);
  }

  return {
    props: {
      projects,
    },
    revalidate: 30,
  };
}
