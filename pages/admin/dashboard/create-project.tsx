import React from "react";

import { AdminLayout } from "@/layout";
import { CreateProjectForm } from "@/components/admin";

const CreateProject = () => {
  return (
    <div>
      <CreateProjectForm />
    </div>
  );
};

export default CreateProject;

CreateProject.getLayout = function getLayout(page: React.ReactElement) {
  return <AdminLayout>{page}</AdminLayout>;
};
