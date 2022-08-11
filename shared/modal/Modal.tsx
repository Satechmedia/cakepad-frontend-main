import React, { ReactNode, useEffect } from "react";
import styles from "./Modal.module.scss";

import Image from "next/image";

import { Button } from "@/shared";
import { toggleScroll } from "@/utils";

export type Props = {
  show: boolean;
  title?: string;
  subtitle?: string;
  children?: ReactNode;
  close?: () => void;
};

const Modal = ({ show, close, title, subtitle, children }: Props) => {
  useEffect(() => {
    toggleScroll(show);
  }, [show]);

  if (!show) return null;

  return (
    <div className={styles.modal} data-close-button={close ? true : false}>
      {close && (
        <div className={styles.modal_close}>
          <Button
            className={styles.modal_closeBtn}
            type="transparent"
            onClick={close}
          >
            <Image src="/svg/modal-cancel.svg" layout="fill" />
          </Button>
        </div>
      )}

      <div className={styles.modal_body}>
        <div className={styles.modal_header}>
          <h3 className={styles.modal_title}>{title}</h3>
          <p className={styles.modal_subtitle}>{subtitle}</p>
        </div>

        <div className={styles.modal_content}>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
