import React, { ReactNode, ReactElement } from "react";
import styles from "./Main.layout.module.scss";

import Image from "next/image";
import { useRouter } from "next/router";

import { Header, Button, Footer } from "@/shared";

interface Props {
  children: ReactNode;
  page: string;
}

const Main = ({ children, page }: Props): ReactElement => {
  const router = useRouter();

  return (
    <div className={styles.layout}>
      <header className={styles.layout_header}>
        <Header transparent={page === "home"} />
      </header>

      {page !== "home" && (
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

      <main data-no-padding={page === "home"} className={styles.layout_content}>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Main;
