import React from "react";
import Head from "next/head";

const materialIcon =
  "https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp";

interface Props {
  title?: string;
  description?: string;
  icon?: string;
}

const Seo = ({
  title = "Cakepad - BSC Launchpad",
  description = "launchpad for projects on binance smartchain network",
  icon = "img/social-icon.png",
}: Props) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="og:title" property="og:title" content={title} />
      <meta
        name="og:description"
        property="og:description"
        content={description}
      />
      <meta property="og:image" content={icon} />
      <meta property="og:url" content="https://cakepad.caketools.io" />
      <meta property="og:site_name" content="Cakepad" />
      <meta name="twitter:card" content="summary_large_image"></meta>
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/favicon.ico" />
      <link href={materialIcon} rel="stylesheet" />
      <link rel="preconnect" href="https://fonts.gstatic.com/"></link>
      <link rel="preconnect" href="https://fonts.googleapis.com/"></link>
      <meta property="og:type" content="website" />
    </Head>
  );
};

export default Seo;
