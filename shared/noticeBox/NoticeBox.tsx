import styles from "./NoticeBox.module.scss";
import React from "react";
import Image from "next/image";

interface Props {
  icon?: string;
  message: string;
  retrying?: boolean;
  reload?: () => void;
  customClass?: string;
}

const NoticeBox = ({
  icon = "/svg/info-gold.svg",
  message,
  retrying,
  customClass,
  reload,
}: Props) => {
  return (
    <div className={`${styles.noticeBox} ${customClass}`}>
      <Image
        width="40"
        height="40"
        src={icon}
        priority={true}
        loading="eager"
        className={styles.noticeBox_icon}
      />

      <p className={styles.noticeBox_text}>
        {retrying ? (
          <span className="loading-dots">Retrying, Please wait</span>
        ) : (
          <>
            {message}
            {reload && (
              <>
                <span
                  className={styles.noticeBox_reload}
                  onClick={() => reload()}
                >
                  Try reloading
                </span>
              </>
            )}
          </>
        )}
        .
      </p>
    </div>
  );
};

export default NoticeBox;
