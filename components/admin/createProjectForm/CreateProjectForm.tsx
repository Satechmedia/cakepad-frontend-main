import React, { useState } from "react";
import styles from "./CreateProjectForm.module.scss";

import Image from "next/image";
import { Button } from "@/shared";
import { Insect } from "react-insect";

const CreateProjectForm = () => {
  const [formdata, setformdata] = useState<Projectpayload>({
    projectName: "",
    description: "",
    buyingToken: "",
    rewardToken: "",
    distChain: undefined,
    purchaseChain: undefined,
    sellingPrice: undefined,
    listingPrice: undefined,
    hardCap: undefined,
    poolAllocation: undefined,
    projectPhase: "staking",
    projectStatus: "unlisted",
    twitter: "",
    discord: "",
    github: "",
    website: "",
    telegram: "",
    tokenomics: "",
    schedule: "",
  });
  const [errors, setErrors] = useState<string[]>([]);

  const onChange = (
    e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setErrors([]);

    const name = e.currentTarget.name;
    const value = e.currentTarget.value;

    setformdata({
      ...formdata,
      [name]: [value],
    });
  };

  const onSelect = (value: string | string[] | null, name: string) => {
    setformdata({
      ...formdata,
      [name]: [value],
    });
  };

  const submitData = () => {
    // let hasEmpty;

    console.log(formdata);
  };

  return (
    <div className={styles.create}>
      <h1 className={styles.create_title}>Create a project</h1>
      <div className={styles.create_form}>
        {/* <div className={styles.create_grid1}>
          <div className={styles.create_logo}>
            <small>Logo Upload</small>
            <small>file fize : 500px by 500px</small>
            <figure className={styles.create_logoimage}>
              <Image src="/svg/image-placeholder.svg" layout="fill" />
            </figure>
          </div>
        </div> */}

        <div className={styles.create_grid1}>
          <Insect
            name="logo"
            label="Logo url (Square sized)*"
            placeholder="https://mylogo.com200x200"
            onChange={onChange}
          />
        </div>

        <div className={styles.create_grid1}>
          <Insect
            name="projectName"
            label="Project Name*"
            placeholder="Cakepad project"
            onChange={onChange}
          />

          <Insect
            name="tokenAddress"
            label="Token Address*"
            placeholder="0x4AFXXXX"
            onChange={onChange}
          />
        </div>

        <div className={styles.create_grid1}>
          <Insect
            type="textarea"
            name="description"
            placeholder="Cakepad is a project that aims to solve... "
            rows={5}
            onChange={onChange}
          />
        </div>

        <div className={styles.create_grid2}>
          <Insect
            name="distChain"
            label="Dist chain *"
            placeholder="Binance Smart Chain"
            onChange={onChange}
          />
          <Insect
            name="purchaseChain"
            label="Purchase chain *"
            placeholder="Polygon"
            onChange={onChange}
          />
        </div>

        <div className={styles.create_grid2}>
          <Insect
            name="sellingPrice"
            label="Selling price *"
            placeholder="$0.15"
            onChange={onChange}
          />
          <Insect
            name="listingPrice"
            label="Listing price *"
            placeholder="$0.40"
            onChange={onChange}
          />

          <Insect
            name="hardCap"
            label="Hardcap *"
            placeholder="Cakepad project"
            onChange={onChange}
          />
          <Insect
            name="poolAllocation"
            label="Pool allocation *"
            placeholder="0.0000"
            onChange={onChange}
          />

          <Insect
            name="projectPhase"
            label="Phase *"
            placeholder="Select an option"
            onSelect={onSelect}
            type="select"
            dropdownIcon="/svg/dropdown-arrow.svg"
            // allowMultiple={3}
            defaultOption={{
              title: "Staking",
              value: "staking",
            }}
            options={[
              {
                title: "Staking",
                value: "staking",
              },
              {
                title: "Funding",
                value: "funding",
              },
              {
                title: "Claiming",
                value: "claiming",
              },
              {
                title: "Vault",
                value: "vault",
              },
            ]}
          />
        </div>

        <div className={styles.create_gridWrap}>
          <p className={styles.create_gridWraplabel}>Schedule*</p>
          <div className={styles.create_grid2}>
            <div className={styles.create_grid2Alt}>
              <Insect
                name="schedule"
                label="Pool starting time*"
                placeholder="dd/mm/yy"
                onChange={onChange}
              />
              <Insect
                name="schedule"
                label="Pool ending time*"
                placeholder="dd/mm/yy"
                onChange={onChange}
              />
            </div>

            <div className={styles.create_grid2Alt}>
              <Insect
                name="schedule"
                label="Claiming start time*"
                placeholder="dd/mm/yy"
                onChange={onChange}
              />
              <Insect
                name="schedule"
                label="Claiming ending time*"
                placeholder="dd/mm/yy"
                onChange={onChange}
              />
            </div>
          </div>
        </div>

        <div className={styles.create_gridWrap}>
          <p className={styles.create_gridWraplabel}>Tokenomics*</p>
          <div className={styles.create_grid2}>
            <div className={styles.create_grid2Alt}>
              <Insect
                name="totalSupply"
                label="Total supply *"
                placeholder="500,0000"
                onChange={onChange}
              />
              <Insect
                name="poolSupply"
                label="Pool supply *"
                placeholder="0.0000"
                onChange={onChange}
              />
            </div>

            <div className={styles.create_grid2Alt}>
              <Insect
                name="listingPrice"
                label="Listing Price *"
                placeholder="Cakepad project"
                onChange={onChange}
              />
              <Insect
                name="salePrice"
                label="IDO sale price *"
                placeholder="0.0000"
                onChange={onChange}
              />
            </div>
          </div>
        </div>

        <div className={styles.create_grid3}>
          <Insect
            name="website"
            label="Website url"
            placeholder="https://example.com"
            onChange={onChange}
          />
          <Insect
            name="discord"
            label="Discord link"
            placeholder="https://medium.com/"
            onChange={onChange}
          />

          <Insect
            name="telegram"
            label="Telegram group"
            placeholder="https://t.me/"
            onChange={onChange}
          />
          <Insect
            name="twitter"
            label="Twitter Handle *"
            placeholder="https://twiter.com/"
            onChange={onChange}
          />
        </div>

        <div className={styles.create_submit}>
          <Button
            type="gold-250"
            onClick={submitData}
            className={styles.create_button}
          >
            Create Project
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CreateProjectForm;
