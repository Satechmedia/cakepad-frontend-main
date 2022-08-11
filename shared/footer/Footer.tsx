import React from "react";
import styles from "./Footer.module.scss";

import Link from "next/link";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div data-copyright className={styles.footer_section}>
        <p className={styles.footer_text}>
          © 2022 CakePad | All right reserved.
        </p>
      </div>

      <div className={styles.footer_section}>
        <a
          className={styles.footer_text}
          href="#"
          target="_blank"
          rel="noopener noreferer"
        >
          Twitter
        </a>
        <span className={styles.footer_divider}>|</span>
        <a
          className={styles.footer_text}
          href="#"
          target="_blank"
          rel="noopener noreferer"
        >
          Telegram
        </a>
        <span className={styles.footer_divider}>|</span>
        <a
          className={styles.footer_text}
          href="#"
          target="_blank"
          rel="noopener noreferer"
        >
          LinkedIn
        </a>
      </div>

      <div className={styles.footer_section}>
        <Link href="/">
          <a className={styles.footer_text}>Privacy Policy</a>
        </Link>

        <Link href="/">
          <a className={styles.footer_text}>Terms of Use</a>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
