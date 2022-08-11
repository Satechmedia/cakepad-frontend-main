import "@/styles/index.scss";
import { useEffect } from "react";
import type { AppProps } from "next/app";
import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";

import { Seo, Nprogress } from "@/shared";
import { StateProvider } from "@/context";
import { API } from "@/api";
import { RouteProtector } from "@/shared";

import { useGlobalState } from "@/context";
import { setToken } from "@/context/admin";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);
  const [, dispatch] = useGlobalState();

  useEffect(() => {
    // Set the AUTH token for any request
    API.interceptors.request.use((config) => {
      if (!config) {
        return;
      }

      const token = localStorage.getItem("cakepad_token");
      (config as any).headers.Authorization = `${token}`;

      return config;
    });

    // get and set token
    const token = localStorage.getItem("cakepad_token");

    if (!!token) {
      dispatch(setToken(token));
    }
  }, []);

  return getLayout(
    <>
      <Seo />
      <Nprogress />
      <StateProvider>
        <RouteProtector>
          <Component {...pageProps} />
        </RouteProtector>
      </StateProvider>
    </>
  );
}

export default MyApp;
