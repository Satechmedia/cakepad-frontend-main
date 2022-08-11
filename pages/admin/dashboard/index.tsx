import React, { useEffect } from "react";
import type { ReactElement } from "react";
import type { GetStaticProps } from "next";

import { AdminLayout } from "@/layout";
import { Tabs } from "@/components/admin";
import { Table } from "@/components/admin";

import { API, PROJECT } from "@/api";
import { useGlobalState } from "@/context";
import { setProjects } from "@/context/admin";


interface Props {
  projects: Project[];
}

const Admin = ({ projects }: Props) => {
  const [, dispatch] = useGlobalState();

  useEffect(() => {
    dispatch(setProjects(projects));
  }, [projects]);

  return (
    <>
      <Tabs />
      <Table />
    </>
  );
};

export default Admin;

Admin.getLayout = function getLayout(page: React.ReactElement) {
  return <AdminLayout showBreadcrumb={false}>{page}</AdminLayout>;
};

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
    // revalidate: 30,
  };
};
