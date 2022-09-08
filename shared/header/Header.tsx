import styles from "./Header.module.scss";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import { Logo, Button } from "@/shared";
import { ConnectWallet } from "@/modals";
import { navLinks } from "@/mock";

interface Props {
  transparent: boolean;
}

const Header = ({ transparent }: Props) => {
  const router = useRouter();
  const [collapsed, setCollapsed] = useState<boolean>(true);
  const [showModal, setShowModal] = useState<boolean>(false);

  const scroll = (id: string) => {
    setCollapsed(true);
  };

  const checkActive = (title: string) => {
    const isActive =
      title === "home"
        ? router.pathname === "/"
        : router.pathname.includes(title.toLowerCase());
    return isActive;
  };

  useEffect(() => {
    collapsed
      ? (document.body.style.overflow = "auto")
      : (document.body.style.overflow = "hidden");
  }, [collapsed]);

  return (
    <header data-transparent={transparent} className={styles.header}>
      <Link href="/">
        <a>
          <div className={styles.header_logo}>
            <Logo type="mixed-light" />
          </div>
        </a>
      </Link>

      <div
        className={
          styles[!collapsed ? "header_wrapper" : "header_wrapper__collapsed"]
        }
      >
        <nav className={styles.header_nav}>
          <ul className={styles.header_menu}>
            {navLinks.map(({ name, title, url }, index) => (
              <li
                key={index}
                className={styles.header_menuItem}
                data-active={checkActive(title)}
                onClick={() => scroll(name)}
              >
                <Link href={url}>
                  <a>{name}</a>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <Button
          type="gold-faded"
          className={styles.header_button}
          onClick={() => setShowModal(true)}
        >
          {/* Connect Wallet */}
          CKT Vesting Portal
        </Button>
      </div>

      <button
        onClick={() => setCollapsed(!collapsed)}
        className={
          styles[collapsed ? "header_hamburger" : "header_hamburger__open"]
        }
      >
        <span className={styles.header_hamburgerBar}></span>
        <span className={styles.header_hamburgerBar}></span>
      </button>

      <ConnectWallet
        show={showModal}
        close={() => setShowModal(false)}
        title="Connect Wallet"
        subtitle="Connect with one of our available wallet info providers or create a new one."
      />
    </header>
  );
};

export default Header;
