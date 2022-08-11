import React, { useState } from "react";
import styles from "./Table.module.scss";

import { Pagination, NoticeBox } from "@/shared";
import TableRow from "./TableRow";

import { useGlobalState } from "@/context";

const Table = () => {
  const [page, setPage] = useState<number>(0);
  const [rowsPerPage, setRowsPerPage] = useState<number>(10);

  const [{ adminState }] = useGlobalState();

  const filteredProjects: Project[] =
    adminState?.projects?.filter(
      (project) => project.projectStatus === adminState?.adminFilter
    ) || [];

  const tableData: Project[] = filteredProjects?.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  if (!adminState?.projects) {
    return <>Loading...</>;
  }

  return (
    <div className={styles.table}>
      <div className={styles.table_wrapper}>
        {tableData?.map((item, index) => (
          <TableRow project={item} key={index} index={index} page={page} />
        ))}
      </div>

      {tableData?.length === 0 && (
        <NoticeBox
          message="No Projects Available"
          customClass="custom-table-margin"
        />
      )}

      {tableData.length > 5 && (
        <Pagination
          rowsPerPage={rowsPerPage}
          page={page}
          setPage={setPage}
          setRowsPerPage={setRowsPerPage}
          total={filteredProjects.length}
        />
      )}
    </div>
  );
};

export default Table;
