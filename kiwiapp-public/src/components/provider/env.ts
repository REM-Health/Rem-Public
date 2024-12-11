"use server";

export type EnvType = {
  NEXT_PUBLIC_APP_ENVIRONMENT: "development" | "staging" | "production" | undefined;
};

export const getEnv = async () => ({
  NEXT_PUBLIC_APP_ENVIRONMENT: process.env.NEXT_PUBLIC_APP_ENVIRONMENT as
    | "development"
    | "staging"
    | "production"
    | undefined,
});
