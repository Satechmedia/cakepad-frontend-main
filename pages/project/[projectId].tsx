import React, { useEffect } from "react";
import type { ReactElement } from "react";
import type { GetStaticProps, GetStaticPaths } from "next";
import { Suspense } from "react";

import { MainLayout } from "@/layout";
import { Seo } from "@/shared";

import { Details, Tabs } from "@/components/project";

import { API, PROJECT } from "@/api";
import { useGlobalState } from "@/context";
import { setProject } from "@/context/project";

interface Props {
  project: Project;
}

const Project = ({ project }: Props): ReactElement => {
  const [, dispatch] = useGlobalState();

  useEffect(() => {
    dispatch(setProject(project));
  }, [project]);

  return (
    <>
      <Seo title="PulsePad - Projects | Caketools" />
      <Details />
      <Tabs />
    </>
  );
};

export default Project;

Project.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout page="project">{page}</MainLayout>;
};

export const getStaticPaths: GetStaticPaths = async () => {
  let paths: any[] = [];

  try {
    // fetch projects
    const { data } = await API.get<{ data: Project[] }>(PROJECT);

    // get array from response
    const projects: Project[] = data.data;

    // save paths
    projects.forEach((project) => {
      paths.push({
        params: {
          projectId: String(project.id),
        },
      });
    });
  } catch (error) {
    // log errors to console
    console.log(error);
  }

  return {
    paths,
    fallback: true, // false or 'blocking'
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  let project: Project | null = null;

  try {
    // fetch projects
    const { data } = await API.get<{ data: Project }>(
      `${PROJECT}/${params?.projectId}`
    );

    // get array from response
    project = data.data;
  } catch (error) {
    // log errors to console
    console.log(error);
  }

  return {
    props: {
      project: project,
    },
    revalidate: 30,
  };
};
