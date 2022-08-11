import React, { useEffect, useRef } from "react";
import styles from "./Table.module.scss";

import Image from "next/image";
import { Insect } from "react-insect";

import { API, UPDATE_PROJECT } from "@/api";

interface Props {
  index: number;
  page: number;
  project: Project;
}

const TableRow = ({ project, index }: Props) => {
  const rowRef = useRef<HTMLDivElement>(null);
  const options = [
    {
      title: "Unlisted",
      value: "unlisted",
    },
    {
      title: "Paused",
      value: "paused",
    },
    {
      title: "Active",
      value: "active",
    },
    {
      title: "Completed",
      value: "completed",
    },
  ];

  const updateStatus = (value: string | string[] | null) => {
    if (value === project.projectStatus) {
      return;
    }

    const data = {
      projectStatus: value,
    };
    try {
      API.post(`${UPDATE_PROJECT}/${project.id}`, data).then((res) =>
        console.log(res)
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.table_row} ref={rowRef}>
      {index === 0 ? (
        <>
          <div className={styles.table_th}>
            <div className={styles.table_thd}></div>
            <div className={styles.table_thd}>Project name</div>
            <div className={styles.table_thd}>Token Address</div>
            <div className={styles.table_thd}>Selling Price</div>
            <div className={styles.table_thd}>Date</div>
            <div className={styles.table_thd}>Status</div>
          </div>
          <div className={styles.table_tr}>
            <div className={styles.table_td}>
              <figure className={styles.table_image}>
                <Image src={project.logo} layout="fill" />
              </figure>
            </div>
            <div className={styles.table_td}>{project.projectName}</div>
            <div className={styles.table_td} data-color="blue">
              ...A4adBD
            </div>
            <div className={styles.table_td}>
              {project.sellingPrice} {project.buyingToken}
            </div>
            <div className={styles.table_td}>
              {project.createdAt.toLocaleString()}
            </div>
            <div className={styles.table_td}>
              <Insect
                name="status"
                type="select"
                placeholder=""
                dropdownIcon="/svg/dropdown-arrow.svg"
                onSelect={updateStatus}
                className={styles.table_filter}
                inputWrapperClass={styles.table_filterWrapper}
                inputClass={styles.table_filterInput}
                iconsClass={styles.table_filterCaret}
                dropdownClass={styles.table_filterDropdown}
                options={options}
                defaultOption={options.find(
                  (item) => item.value === project.projectStatus
                )}
              />
            </div>
          </div>
        </>
      ) : (
        <div className={styles.table_th}>
          <div className={styles.table_td}>
            <figure className={styles.table_image}>
              <Image src={project.logo} layout="fill" />
            </figure>
          </div>
          <div className={styles.table_td}>{project.projectName}</div>
          <div className={styles.table_td} data-color="blue">
            ...A4adBD
          </div>
          <div className={styles.table_td}>
            {project.sellingPrice} {project.buyingToken}
          </div>
          <div className={styles.table_td}>
            {project.createdAt.toLocaleString()}
          </div>
          <div className={styles.table_td}>
            <Insect
              name="status"
              type="select"
              placeholder=""
              dropdownIcon="/svg/dropdown-arrow.svg"
              onSelect={updateStatus}
              className={styles.table_filter}
              inputWrapperClass={styles.table_filterWrapper}
              inputClass={styles.table_filterInput}
              iconsClass={styles.table_filterCaret}
              dropdownClass={styles.table_filterDropdown}
              options={options}
              defaultOption={options.find(
                (item) => item.value === project.projectStatus
              )}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default TableRow;
