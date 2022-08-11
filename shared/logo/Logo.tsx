import styles from "./Logo.module.scss";
import React from "react";

import Image from "next/image";

interface Props {
  type?: "dark" | "default" | "mixed-light" | "mixed-dark";
}

const Logo = ({ type }: Props) => {
  return (
    <div className={styles.logo}>
      <Image
        src={
          type === "dark"
            ? "/svg/logo-dark.svg"
            : type === "mixed-light"
            ? "/svg/logo-mixed-light.svg"
            : type === "mixed-dark"
            ? "/svg/logo-mixed-dark.svg"
            : "/svg/logo.svg"
        }
        layout="fill"
        loading="eager"
        priority={true}
      />
    </div>
  );
};

export default Logo;
