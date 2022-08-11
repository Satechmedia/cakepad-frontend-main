import React from "react";
import type { ReactElement } from "react";

import { MainLayout } from "@/layout";
import { StatBoxes, StakingForm } from "@/components/staking";

const Staking = () => {
  return (
    <>
      <StatBoxes />
      <StakingForm />
    </>
  );
};

export default Staking;

Staking.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout page="home">{page}</MainLayout>;
};
