import React from "react";
import type { ReactElement } from "react";


import {
  Hero,
  About,
  Features,
  Participate,
  Apply,
} from "@/components/landing";
import { MainLayout } from "@/layout";

const Home = (): ReactElement => {
  return (
    <>
      <Hero />
      <About />
      <Features />
      <Participate />
      <Apply />
    </>
  );
};

export default Home;

Home.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout page="home">{page}</MainLayout>;
};
