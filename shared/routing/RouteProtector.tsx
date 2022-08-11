import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { Loader } from "..";
import { useGlobalState } from "@/context";
import { setToken } from "@/context/admin";
import { protectedPaths } from "@/mock";

interface Props {
  children: React.ReactNode;
}

const RouteProtector = ({ children }: Props) => {
  const router = useRouter();
  const [, dispatch] = useGlobalState();
  const [loading, setLoading] = useState(true);

  const pathIsProtected = protectedPaths.includes(router.pathname);
  const pathIsReverseProtected = ["/admin/login"].includes(router.pathname);

  useEffect(() => {
    // get and store token if available
    const token = localStorage.getItem("cakepad_token");
    !!token && dispatch(setToken(token));

    setTimeout(() => {
      // redirect acordingly
      pathIsProtected && !!!token && router.push("/admin/login");
      pathIsReverseProtected && !!token && router.push("/admin/dashboard");

      // remove loading accordingly
      pathIsReverseProtected && !!!token && setLoading(false);
      pathIsProtected && !!token && setLoading(false);
    }, 2000);
  }, []);

  // show loader if path is protected and there's no token in state
  if (loading && (pathIsProtected || pathIsReverseProtected)) {
    return <Loader fullScreen={true} />;
  }

  return <>{children}</>;
};

export default RouteProtector;
