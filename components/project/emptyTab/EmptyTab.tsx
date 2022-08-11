import React, { ReactElement } from "react";
import styles from "./EmptyTab.module.scss";

import { Button } from '@/shared'

interface Props {
  text: string;
  button?: {
    action: () => void;
    text: string;
  }
}
const EmptyTab = ({ text, button }: Props): ReactElement => {
  return (
    <div className={styles.empty}>
      <p className={styles.empty_text}>{text}</p>
      {
        button && (
          <Button className={styles.empty_button} type="gold-150-outline" onClick={button.action}>{button.text}</Button>
        )
      }
    </div>
  );
};

export default EmptyTab;
