import styles from "./Pagination.module.scss";

import React, { useState, useEffect } from "react";

import { Insect } from "react-insect";
import { Pagination } from "antd";

interface Props {
  page: number;
  setPage: any;
  rowsPerPage: number;
  setRowsPerPage: any;
  total: number;
}

const TablePagination = ({
  page = 0,
  setPage,
  rowsPerPage = 10,
  setRowsPerPage,
  total = 0,
}: Props) => {
  const options = [
    {
      title: "10",
      value: "10",
    },
    {
      title: "15",
      value: "15",
    },
    {
      title: "20",
      value: "20",
    },
    {
      title: "30",
      value: "30",
    },
    {
      title: "50",
      value: "50",
    },
  ];

  const getRange = (total: any, page: any, rowsPerPage: any) => {
    if (page * rowsPerPage + rowsPerPage >= total) {
      return total;
    } else if (total > 10) {
      return Math.round(page * rowsPerPage + rowsPerPage);
    } else {
      return total;
    }
  };

  return (
    <div className={styles.pagination}>
      {total > 0 && (
        <span className={styles.pagination_stats}>
          Showing {page * rowsPerPage + 1} -{" "}
          {getRange(total, page, rowsPerPage)} of {total}
        </span>
      )}

      <div className={styles.pagination_controls}>
        <Pagination
          disabled={total <= 10}
          size="small"
          total={total == 0 ? 1 : total}
          defaultCurrent={1}
          showSizeChanger={false}
          pageSize={rowsPerPage}
          onChange={(page) => setPage(page - 1)}
        />
      </div>
      {total > 0 && (
        <div
          className={`${styles.pagination_sizer} ${
            total === 0 ? "hide" : total <= 10 && "invisible"
          }`}
        >
          <span className={styles.pagination_sizerText}>Show Rows</span>

          <Insect
            type="select"
            name="page"
            placeholder=""
            options={options}
            defaultOption={{
              title: "10",
              value: "10",
            }}
            className={styles.pagination_filter}
            inputWrapperClass={styles.pagination_filterWrapper}
            inputClass={styles.pagination_filterInput}
            iconsClass={styles.pagination_filterCaret}
            dropdownClass={styles.pagination_filterDropdown}
            checkmarkIcon={<span></span>}
            dropdownIcon="/svg/dropdown-arrow.svg"
            onSelect={(value) => setRowsPerPage(Number(value))}
          />
        </div>
      )}
    </div>
  );
};

export default TablePagination;
