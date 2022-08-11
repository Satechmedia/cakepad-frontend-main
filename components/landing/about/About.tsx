import React from "react";
import styles from "./About.module.scss";

const About = () => {
  return (
    <div className={styles.about}>
      <h2 className={styles.about_title}>About Cakepad</h2>
      <p className={styles.about_subtitle}>
        Fetch Real-Time Charts to analyze market movements, track the growth of
        BSC projects, and develop profitable investment strategies.Fetch
        Real-Time Charts to analyze market movements, track the growth of BSC
        projects, and develop
      </p>

      <div className={styles.about_columns}>
        <p className={styles.about_column}>
          A key piece to the ecosystem which started with BSCPad is the addition
          of a Cardano based launchpad which will give our team full control of
          cross-platform launches, enabling liquidity sniping bot protection,
          our cross-chain bridge and proven staking systems.
          <br /> <br />
          CAKEPad will have several deflationary triggers tied to selling,
          unstaking and IDO participation.
        </p>
        <p className={styles.about_column}>
          CAKEPad is brought to you by Caketools Labs.
          <br /> <br />
          From the time of inception of BSCPad we have demonstrated again and
          again that our team knows how to move the needle with crypto
          marketing.
          <br /> <br />
          We have the expertise, resources, knowledge and experience. We have
          demonstrated the same with fair launches of multiple IDOs on our
          launchpad platforms.
        </p>
      </div>
    </div>
  );
};

export default About;
