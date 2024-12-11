"use client";

import { createContext, useContext, useEffect, useRef, useState } from "react";
import { EnvType, getEnv } from "./env";

export const EnvContext = createContext(null as EnvType | null);

export const EnvProvider = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const [env, setEnv] = useState<EnvType | null>(null);
  const initialized = useRef(false);

  useEffect(() => {
    if (!initialized.current) {
      initialized.current = true;
      getEnv().then((env) => {
        setEnv(env);
      });
    }
  }, []);

  if (env === null) {
    return null;
  }

  return <EnvContext.Provider value={env}>{children}</EnvContext.Provider>;
};

export const useEnv = () => {
  return useContext(EnvContext);
};
