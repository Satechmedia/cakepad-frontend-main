import React from "react";
import styles from "./Button.module.scss";

import Image from "next/image";

interface Props {
  type:
    | "gold-100"
    | "gold-100-outline"
    | "gold-150-outline"
    | "gold-200"
    | "gold-200-outline"
    | "gold-250"
    | "gold-gradient"
    | "gold-faded"
    | "gold-brown"
    | "black-700"
    | "green-200"
    | "transparent";
  children: React.ReactNode;
  iconPrefix?: string;
  iconSuffix?: string;
  className?: string;
  onClick: () => void;
}

const Button = ({
  type,
  children,
  onClick,
  className,
  iconPrefix,
  iconSuffix,
}: Props) => {
  return (
    <button
      onClick={onClick}
      className={`${styles[type]} ${className}`}
      data-type={type}
    >
      {!!iconPrefix && (
        <figure className={styles.button_icon}>
          <Image src={iconPrefix} layout="fill" />
        </figure>
      )}
      {children}
      {!!iconSuffix && (
        <figure className={styles.button_icon}>
          <Image src={iconSuffix} layout="fill" />
        </figure>
      )}
    </button>
  );
};

export default Button;
