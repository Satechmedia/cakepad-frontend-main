import React, { useState } from "react";
import styles from "./AdminLayout.module.scss";

import Link from "next/link";
import Image from "next/image";

import { useRouter } from "next/router";
import { Logo, Button } from "@/shared";

import { useGlobalState } from "@/context";
import { setToken } from "@/context/admin";

interface Props {
  children: React.ReactNode;
  showBreadcrumb?: boolean;
}

const AdminLayout = ({ children, showBreadcrumb = true }: Props) => {
  const router = useRouter();
  const [showDD, setShowDD] = useState(false);
  const [, dispatch] = useGlobalState();

  const logout = () => {
    // remove from local storage
    localStorage.removeItem("cakepad_token");

    // remove from state
    dispatch(setToken(null));

    // redirect ro home
    router.replace("/");
  };

  return (
    <div className={styles.layout}>
      <header className={styles.layout_header}>
        <Link href="/admin/dashboard">
          <a className={styles.header_logo}>
            <Logo type="mixed-light" />
          </a>
        </Link>

        <div className={styles.layout_profile}>
          <Button
            className={styles.layout_button}
            type="transparent"
            onClick={() => setShowDD(!showDD)}
          >
            <span className={styles.layout_avatar}>AD</span>
            <span className={styles.layout_username}>Adekola Durotola</span>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={styles.layout_buttonicon}
              data-rotate={showDD}
            >
              <path
                d="M19.9201 8.9502L13.4001 15.4702C12.6301 16.2402 11.3701 16.2402 10.6001 15.4702L4.08008 8.9502"
                stroke="white"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <ul data-open={showDD} className={styles.layout_dropdown}>
              <li className={styles.layout_dropdownitem}>
                <Link href="/">
                  <a>Home</a>
                </Link>
              </li>
              <li className={styles.layout_dropdownitem} onClick={logout}>
                Logout
              </li>
            </ul>
          </Button>
        </div>
      </header>

      {showBreadcrumb && (
        <div className={styles.layout_breadcrumbs}>
          <Button
            className={styles.layout_breadcrumbsBtn}
            onClick={() => router.back()}
            type="transparent"
          >
            <Image src="/svg/arrow-left.svg" width="24" height="24" />
            <span className={styles.layout_breadcrumbsText}>Back</span>
          </Button>
        </div>
      )}

      <main className={styles.layout_content}>{children}</main>
    </div>
  );
};

export default AdminLayout;
