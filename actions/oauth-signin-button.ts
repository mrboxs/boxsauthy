"use server";

import { isRedirectError } from "next/dist/client/components/redirect";

import { signIn } from "@/auth";

export const oauthSigninButton = async (provider: "github" | "google") => {
  try {
    await signIn(provider, { redirectTo: "/" });
  } catch (error) {
    if (isRedirectError(error)) {
      throw error;
    }

    console.error(error);
  }
};
